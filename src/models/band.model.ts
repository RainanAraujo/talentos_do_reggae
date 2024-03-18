import { INSTRUMENTOS } from "@/configs/instrumentos";
import { ISO8601DateRegex, cpfRegex, telRegex } from "@/utils/regex";
import { z } from "zod";

export const bandSchema = z.object({
  nome: z.string().min(1, { message: "Campo obrigatório" }),
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
          .regex(ISO8601DateRegex, "Data inválida"),         
        cpf: z
          .string()
          .regex(cpfRegex, "CPF inválido")
          .min(1, { message: "Campo obrigatório" }),
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
          .regex(ISO8601DateRegex, "Data inválida"),
        cpf: z
          .string()
          .regex(cpfRegex, "CPF inválido")
          .min(1, { message: "Campo obrigatório" }),
        instrumento: z.enum(INSTRUMENTOS).nullable(),
      })
    )
    .min(1, { message: "É necessário inserir pelo menos um músico" }),
  videoLinkURL: z.string().url({ message: "URL inválida" }),
});

export type Band = z.infer<typeof bandSchema>;
