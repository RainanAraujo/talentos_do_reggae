import { cpfRegex, dateRegex, igRegex, telRegex } from "@/utils/regex";
import { z } from "zod";

export const djSchema = z.object({
  nome: z.string().min(1, { message: "Campo obrigatório" }),
  ig: z.string().url({ message: "Link inválido" }),
  email: z.string().email({ message: "Email inválido" }),
  tel: z
    .string()
    .regex(telRegex, "Número inválido")
    .min(1, { message: "Campo obrigatório" }),
  nascimento: z
    .string()
    .regex(dateRegex, "Data inválida")
    .min(1, { message: "Campo obrigatório" }),
  cpf: z
    .string()
    .regex(cpfRegex, "CPF inválido")
    .min(1, { message: "Campo obrigatório" }),
  videoLinkURL: z.string().url({ message: "URL inválida" }),
});

export type DJ = z.infer<typeof djSchema>;
