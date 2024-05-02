import { AuthService } from "@/auth";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { routes } from "./routes";
import type { Session } from "next-auth";

export default AuthService.instance.auth((req: NextRequest) => {
  const session = "auth" in req && (req.auth as Session);
  const now = Date.now();
  const expires = session ? new Date(session.expires).getTime() : now;

  if (!session || expires <= now) {
    return NextResponse.rewrite(new URL(routes.auth.LOGIN, req.url));
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|login|register).*)"],
};
