import { INSTRUMENTOS } from "@/configs/instrumentos";
import { cpfRegex, dateRegex, igRegex, telRegex } from "@/utils/regex";
import { z } from "zod";

export const bandSchema = z.object({
  nome: z.string().min(1, { message: "Campo obrigatório" }),
  ig: z
    .string()
    .regex(igRegex, "Nome de usuário inválido")
    .min(1, { message: "Campo obrigatório" }),
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
          .regex(dateRegex, "Data inválida")
          .min(1, { message: "Campo obrigatório" }),
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
          .regex(dateRegex, "Data inválida")
          .min(1, { message: "Campo obrigatório" }),
        cpf: z
          .string()
          .regex(cpfRegex, "CPF inválido")
          .min(1, { message: "Campo obrigatório" }),
        instrumento: z.enum(INSTRUMENTOS),
      })
    )
    .min(1, { message: "É necessário inserir pelo menos um músico" }),
  videoLinkURL: z.string().url({ message: "URL inválida" }),
});

export type Band = z.infer<typeof bandSchema>;
