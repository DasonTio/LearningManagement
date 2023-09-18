import prisma from "@/lib/db";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../[...nextauth]/route";

export const GET = async (request: Request) => {
  const session = await getServerSession(authOptions);

  const { searchParams } = new URL(request.url);
  const paramsId = searchParams.get("id");
  const paramsCode = searchParams.get("c");

  if (!paramsId) {
    return NextResponse.json({
      message: "",
    });
  }
  const res = await prisma.user.findFirst({
    where: {
      id: parseInt(paramsId),
      verification_code: paramsCode,
    },
  });

  return NextResponse.json(res);
};
export const POST = async () => {};
