"use client";
import Button from "@/app/components/Button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/app/components/Form";
import { Input } from "@/app/components/Input";
import { isValidCPF } from "@/utils/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useHookFormMask } from "use-mask-input";
import { z } from "zod";

const registerSchema = z.object({
  cpf: z
    .string()
    .min(1, { message: "Campo obrigatório" })
    .refine((cpf) => isValidCPF(cpf), {
      message: "CPF inválido",
    }),
});

export default function Votacao() {
  const [isLoading, setIsLoading] = React.useState(false);

  const router = useRouter();
  const formRegister = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      cpf: "",
    },
  });
  const registerWithMask = useHookFormMask(formRegister.register);
  async function onSubmitRegister(values: z.infer<typeof registerSchema>) {
    setIsLoading(true);
    try {
      setIsLoading(false);

      toast.success("Registro realizado com sucesso.");
      router.push("/votacao");
    } catch (error) {
      setIsLoading(false);
      let message = "Erro ao realizar o registro, tente novamente.";
      if (error instanceof Error) {
        message = error.message;
      }
      toast.error(message);
    }
  }

  return (
    <div className="flex items-center justify-center max-w-md flex-col mx-auto">
      <h3 className="text-2xl font-bold text-white mb-1">Confirmar dados</h3>
      <span className="text-xs text-center text-gray-300 mb-6">
        Parece que é a sua primeira vez aqui. Para continuar, por favor confirme
        os seus dados. Essas informações são necessárias para garantir a
        segurança do processo de votação.
      </span>

      <Form {...formRegister}>
        <form
          id="form"
          onSubmit={formRegister.handleSubmit(onSubmitRegister)}
          className="space-y-4 w-full"
        >
          <FormField
            control={formRegister.control}
            name="cpf"
            render={({ field }) => (
              <FormItem>
                <FormLabel>CPF *</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Insira o CPF"
                    {...field}
                    {...registerWithMask("cpf", ["999.999.999-99"], {
                      required: true,
                    })}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            form="form"
            type="submit"
            className="bg-green text-white hover:bg-green-600 disabled:bg-gray-600 w-full"
            disabled={isLoading}
          >
            {isLoading
              ? "Registrando informação..."
              : "Confirmar Dados e Continuar"}
          </Button>
        </form>
      </Form>
    </div>
  );
}
