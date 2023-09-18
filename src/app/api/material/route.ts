import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json({
    message: "tESTSET",
  });
};

export const POST = () => {
  return NextResponse.json({
    message: "tESTSET",
  });
};
