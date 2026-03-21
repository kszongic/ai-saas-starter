import { auth } from "@/lib/auth";
import { NextResponse } from "next/server";

const protectedPaths = ["/chat", "/dashboard", "/settings", "/api/ai"];
const adminPaths = ["/dashboard"];

export default auth((req) => {
  const { pathname } = req.nextUrl;

  const isProtected = protectedPaths.some((p) => pathname.startsWith(p));
  if (isProtected && !req.auth) {
    return NextResponse.redirect(new URL("/auth/signin", req.url));
  }

  const isAdmin = adminPaths.some((p) => pathname.startsWith(p));
  // @ts-expect-error - role from our schema
  if (isAdmin && req.auth?.user?.role !== "admin") {
    return NextResponse.redirect(new URL("/chat", req.url));
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/((?!_next|static|favicon.ico|auth).*)"],
};
