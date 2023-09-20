import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const response = NextResponse.next();
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });
  if (!token) {
    return NextResponse.redirect(
      new URL(`${process.env.NEXT_PUBLIC_API}/login`)
    );
  }
  return response;
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/", "/blog", "/blog/:path*"],
};
