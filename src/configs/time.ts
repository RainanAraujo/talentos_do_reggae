import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);
dayjs.extend(timezone);

export const TIMEZONE = 'America/Sao_Paulo';
export const REGISTRATION_END_TIME = dayjs.tz('2024-04-17 23:59:59',TIMEZONE);