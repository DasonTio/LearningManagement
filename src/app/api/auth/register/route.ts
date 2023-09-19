import prisma from "@/lib/db";
import * as React from "react";
import { z } from "zod";
import { NextRequest, NextResponse } from "next/server";
import { compareSync, genSaltSync, hashSync } from "bcrypt";

import { VerificationEmail } from "@/components/verification-email";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const schema = z.object({
  name: z.string().nonempty(),
  email: z.string().nonempty(),
  password: z.string().nonempty(),
});

export const GET = async (request: NextRequest) => {
  return NextResponse.json({});
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

  const verification_code = hashSync(data.email, genSaltSync(10));
  const createdUser = await prisma.user.create({
    data: {
      name: data.name,
      email: data.email,
      password: hashSync(data.password, genSaltSync(10)),
      verification_code: verification_code,
    },
  });

  console.log("TRY");
  try {
    console.log(data.email);
    const email = await resend.emails.send({
      from: "codingdec14@gmail.com",
      to: [data.email],
      subject: "Verification",
      text: `Name: ${data.name}\nEmail: ${data.email}`,
      react: VerificationEmail({
        user_id: createdUser.id.toString(),
        verification_code: createdUser.verification_code,
      }) as React.ReactElement,
    });
    console.log(email);
    return NextResponse.json(email);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error });
  }
};
