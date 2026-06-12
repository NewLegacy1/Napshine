import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import {
  isSiteTheme,
  pickAbTheme,
  THEME_COOKIE,
  type SiteTheme,
} from "@/config/themes";

export function middleware(request: NextRequest) {
  const themeParam = request.nextUrl.searchParams.get("theme");
  let theme: SiteTheme;

  if (isSiteTheme(themeParam)) {
    theme = themeParam;
  } else {
    const existing = request.cookies.get(THEME_COOKIE)?.value;
    theme = isSiteTheme(existing) ? existing : pickAbTheme();
  }

  const response = NextResponse.next();
  response.cookies.set(THEME_COOKIE, theme, {
    maxAge: 60 * 60 * 24 * 30,
    path: "/",
    sameSite: "lax",
  });

  return response;
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
