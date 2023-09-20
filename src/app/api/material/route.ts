import prisma from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
  const response = await prisma.lectures.findMany({
    where: {
      isSeen: true,
    },
  });

  if (response.length < 1) {
    return NextResponse.json({
      message: "You have not seen any material yet",
    });
  }
  return NextResponse.json({
    data: response,
  });
};

export const POST = async (request: NextRequest) => {
  const data = await request.json();
  const validator = await prisma.lectures.findFirst({
    where: {
      title: data.title,
    },
  });
  if (validator) {
    return NextResponse.json({
      message: "Lecture new state",
    });
  }
  await prisma.lectures.create({
    data: {
      link: data.link,
      title: data.title,
      isSeen: true,
    },
  });
  return NextResponse.json({
    message: "Success",
  });
};
