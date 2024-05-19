import { AuthService } from "@/auth";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { routes } from "./routes";
import type { Session } from "next-auth";
import appConstants from "./contants";

export default AuthService.instance.auth((req: NextRequest) => {
  const session = "auth" in req && (req.auth as Session);

  if (!session) {
    return NextResponse.redirect(new URL(routes.auth.LOGIN, req.url));
  }

  const response = NextResponse.next();
  response.cookies.set(
    appConstants.USER_ID_COOKIE,
    JSON.stringify(session.user.id)
  );

  return response;
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|login|register).*)"],
};
