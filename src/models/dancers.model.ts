import { cpfRegex, dateRegex, igRegex, telRegex } from "@/utils/regex";
import { z } from "zod";

export const dancersSchema = z.object({
  nome: z.string().min(1, { message: "Campo obrigatório" }).optional(),
  ig: z.string().url({ message: "Link inválido" }),
  email: z.string().email({ message: "Email inválido" }),
  tel: z
    .string()
    .regex(telRegex, "Número inválido")
    .min(1, { message: "Campo obrigatório" }),
  dancarinos: z
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
    .length(2, { message: "É necessário um par de dançarinos" }),
  videoLinkURL: z.string().url({ message: "URL inválida" }),
});

export type Dancers = z.infer<typeof dancersSchema>;
