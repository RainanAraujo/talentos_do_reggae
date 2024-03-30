import { INSTRUMENTOS } from "@/configs/instrumentos";
import { ISO8601DateRegex, telRegex } from "@/utils/regex";
import { isValidBirthData, isValidCPF } from "@/utils/validation";
import { z } from "zod";

export const bandSchema = z.object({
  nome: z.string().min(1, { message: "Campo obrigatório" }),
  cidade: z.string().min(1, { message: "Campo obrigatório" }),
  ig: z.string().url({ message: "URL inválida" }),
  email: z.string().email({ message: "Email inválido" }),
  tel: z
    .string()
    .regex(telRegex, "Número Invalido")
    .min(1, { message: "Campo obrigatório" }),
  cantores: z
    .array(
      z.object({
        nome: z.string().min(1, { message: "Campo obrigatório" }),
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
      })
    )
    .min(1, { message: "É necessário inserir pelo menos um cantor" }),
  instrumentistas: z
    .array(
      z.object({
        nome: z.string().min(1, { message: "Campo obrigatório" }),
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
        instrumento: z.enum(INSTRUMENTOS).nullable(),
      })
    )
    .min(1, { message: "É necessário inserir pelo menos um músico" }),
  videoLinkURL: z.string().url({ message: "URL inválida" }),
});

export type Band = z.infer<typeof bandSchema>;
