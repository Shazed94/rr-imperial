import { NextResponse, NextRequest } from "next/server";
import { getCookie } from "cookies-next";
import { cookies } from "next/headers";

export async function middleware(req, res) {
  const admin = getCookie("adminemail", { cookies });

  console.log(admin);
  if (req.nextUrl.pathname.startsWith("/admin")) {
    if (admin) {
      return NextResponse.rewrite(new URL("/admin/dashboard", req.nextUrl));
    } else return NextResponse.redirect(new URL("/login", req.url));
  }
}

export const config = {
  matcher: ["/admin", "/login", "/signup"],
};
