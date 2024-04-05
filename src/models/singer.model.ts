import { ISO8601DateRegex, telRegex } from "@/utils/regex";
import { isValidBirthData, isValidCPF } from "@/utils/validation";
import { z } from "zod";

export const singerSchema = z.object({
  nome: z.string().min(1, { message: "Campo obrigatório" }),
  cidade: z.string().min(1, { message: "Campo obrigatório" }),
  ig: z.string().url({ message: "Link inválido" }),
  email: z.string().email({ message: "Email inválido" }),
  tel: z
    .string()
    .regex(telRegex, "Número inválido")
    .min(1, { message: "Campo obrigatório" }),
  nascimento: z
    .string()
    .min(1, { message: "Campo obrigatório" })
    .regex(ISO8601DateRegex, "Data inválida")
    .refine((data) => isValidBirthData(data), {
      message: "Data inválida",
    }),
  cpf: z
    .string()
    .min(1, { message: "Campo obrigatório" })
    .refine((cpf) => isValidCPF(cpf), {
      message: "CPF inválido",
    }),
  videoLinkURL: z.string().url({ message: "URL inválida" }),
});

export type Singer = z.infer<typeof singerSchema>;
