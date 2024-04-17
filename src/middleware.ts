import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { REGISTRATION_END_TIME, TIMEZONE } from "./configs/time";

dayjs.extend(utc);
dayjs.extend(timezone);

export function middleware(request: NextRequest) {
  const currentTime = dayjs().tz(TIMEZONE);
  if (currentTime.isAfter(REGISTRATION_END_TIME)) {
    return NextResponse.redirect(new URL("/", request.url));
  }
}

export const config = {
  matcher: "/subscribe/:path*",
};
