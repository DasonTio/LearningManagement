import prisma from "@/lib/db";
import z from "zod";
import { NextResponse, NextRequest } from "next/server";

const verifiedRequestSchema = z.object({
  id: z.string().nonempty(),
  c: z.string().nonempty(),
});

export const GET = async (request: NextRequest) => {
  const data = await request.json();
  const isVerified = verifiedRequestSchema.safeParse(data);
  if (!isVerified) {
    return NextResponse.json({
      message: "Not A Valid Link",
    });
  }
  const res = await prisma.user.findFirst({
    where: {
      id: parseInt(data.id),
      verification_code: data.c,
    },
  });
  return NextResponse.json(res);
};
// export const POST = async (request: NextRequest) => {
//   const data = await request.json();
//   return NextResponse.json({});
// };
