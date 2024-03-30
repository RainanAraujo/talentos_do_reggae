import { z } from "zod";
import { bandSchema } from "./band.model";
import { dancersSchema } from "./dancers.model";
import { djSchema } from "./dj.model";

export const subscribeParamsSchema = z.discriminatedUnion('type', [
    z.object({
        type: z.literal('band'),
        ...bandSchema.shape
    }),
    z.object({
        type: z.literal('dancers'),
        ...dancersSchema.shape
    }),
    z.object({
        type: z.literal('dj'),
        ...djSchema.shape
    }),
]).and(z.object({
    recaptchaToken: z.string()
}));

export type SubscribeParams = z.infer<typeof subscribeParamsSchema>;