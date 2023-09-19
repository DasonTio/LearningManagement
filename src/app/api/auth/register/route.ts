import prisma from "@/lib/db";
import { z } from "zod";
import { NextRequest, NextResponse } from "next/server";
import { compareSync, genSalt, genSaltSync, hashSync } from "bcrypt";

const schema = z.object({
  name: z.string().nonempty(),
  email: z.string().nonempty(),
  password: z.string().nonempty(),
});

// export const GET = async (request: NextRequest) => {
//   return NextResponse.json({
//     message: "Register",
//   });
// };
export const POST = async (request: NextRequest) => {
  const data = await request.json();
  const validated = schema.safeParse(data);
  if (!validated) {
    return NextResponse.json({
      message: "Please input all the required field",
    });
  }
  // compareSync for Comparing the Password to the database
  prisma.user.create({
    data: {
      name: data.name,
      email: data.email,
      password: hashSync(data.password, genSaltSync(10)),
    },
  });

  return NextResponse.json({
    message: "Register",
  });
};
