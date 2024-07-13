import { z } from "zod";

export const voteSchema = z.object({
  type: z.union([z.literal("band"), z.literal("singer")]),
  vote: z.number().min(0, { message: "Campo obrigatório" }),
  recaptchaToken: z.string(),
});

export type Vote = z.infer<typeof voteSchema>;
