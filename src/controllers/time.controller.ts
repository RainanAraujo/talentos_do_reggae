import { TIMEZONE } from "@/configs/time";
import axios from "axios";
import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);
dayjs.extend(timezone);

export class TimeController {
  static instance: TimeController | null = null;
  private baseTime: dayjs.Dayjs | null = null;
  private initTime: dayjs.Dayjs | null = null;

  now() {
    console.log(this.baseTime, this.initTime);
    (this.baseTime, this.initTime);
    if (this.baseTime == null || !this.initTime == null) {
      throw new Error("Horário não inicializado.");
    }
    const now = dayjs().utc();
    const diff = now.diff(this.initTime, "s");
    return this.baseTime.add(diff, "s");  
  }

  schedule(callback: (time: dayjs.Dayjs) => void, at: dayjs.Dayjs) {
    const interval = at.diff(this.now());
    const timer = setTimeout(() => {
      callback(this.now());
    }, interval);
    return timer;
  }

  static async getInstance() {
      if (!this.instance) {
        this.instance = new TimeController();
        try {
          const response = await axios.get(
            `https://worldtimeapi.org/api/timezone/${TIMEZONE}`
          );
          const data = response.data;
          if (response.status === 200) {
            this.instance.baseTime = dayjs(data.datetime).tz(TIMEZONE);
            this.instance.initTime = dayjs().utc();
          } else {
            throw new Error("Não foi possível obter o horário da zona.");
          }
        } catch (error) {
          console.error("Erro:", error);
          return null;
        }
      }
      return this.instance;
  }
}