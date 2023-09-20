import prisma from "@/lib/db";
import * as React from "react";
import { z } from "zod";
import { NextRequest, NextResponse } from "next/server";
import { compareSync, genSaltSync, hashSync } from "bcrypt";

import { VerificationEmail } from "@/components/VerificationEmail";
import { Resend } from "resend";
import { createHash, randomBytes } from "crypto";

const resend = new Resend(process.env.RESEND_API_KEY);

const schema = z.object({
  name: z.string().nonempty(),
  email: z.string().nonempty(),
  password: z.string().nonempty(),
});

export const GET = async (request: NextRequest) => {
  const search = new URL(request.url).searchParams;
  const code = search.get("c");

  const user = await prisma.user.findFirst({
    where: {
      verification_code: code as string,
    },
  });

  if (!user) {
    return NextResponse.json({
      message: "No Valid User",
      status: 401,
    });
  }
  await prisma.user.update({
    data: {
      verified: true,
    },
    where: {
      id: user.id,
    },
  });

  return NextResponse.json({
    message: "User Verified",
    status: 200,
  });
};

export const POST = async (request: NextRequest) => {
  const data = await request.json();
  const validated = schema.safeParse(data);
  if (!validated) {
    return NextResponse.json({
      message: "Please input all the required field",
      status: 422,
    });
  }
  // if (!data.email.includes("@student.pradita")) {
  //   return NextResponse.json({
  //     message: "Please input the correct email",
  //     status: 422,
  //   });
  // }
  const routeUser = await prisma.user.findUnique({
    where: {
      email: data.email,
    },
  });

  if (routeUser) {
    return NextResponse.json({
      message: "Email is already Signed Up",
      status: 422,
    });
  }

  const verification_code = createHash("sha1")
    .update(data.email)
    .update(randomBytes(32))
    .digest("hex");

  const createdUser = await prisma.user.create({
    data: {
      name: data.name,
      email: data.email,
      password: hashSync(data.password, genSaltSync(10)),
      verification_code: verification_code,
    },
  });

  try {
    const email = await resend.emails.send({
      from: "no-reply@hakusho.co",
      to: [data.email],
      subject: "Verification",
      text: `Name: ${data.name}\nEmail: ${data.email}`,
      react: VerificationEmail({
        verification_code: createdUser.verification_code,
      }) as React.ReactElement,
    });

    return NextResponse.json(email);
  } catch (error) {
    return NextResponse.json({ error });
  }
};
