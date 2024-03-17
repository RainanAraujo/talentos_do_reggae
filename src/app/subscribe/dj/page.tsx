"use client";
import React from "react";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../components/Form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/Select";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "../../components/Button";
import { Input } from "@/app/components/Input";
import { INSTRUMENTOS } from "@/configs/instrumentos";

const formSchemaDJ = z.object({
  nome: z.string().min(1, { message: "Campo obrigatório" }),
  ig: z.string().min(1, { message: "Campo obrigatório" }),
  email: z.string().email({ message: "Email inválido" }),
  tel: z.string().min(1, { message: "Campo obrigatório" }),
  nascimento: z.string().min(1, { message: "Campo obrigatório" }),
  cpf: z.string().min(1, { message: "Campo obrigatório" }),
  videoLinkURL: z.string().url({ message: "URL inválida" }),
});

type FormDJ = z.infer<typeof formSchemaDJ>;

export default function FormDJ() {
  const formDJ = useForm<z.infer<typeof formSchemaDJ>>({
    resolver: zodResolver(formSchemaDJ),
    defaultValues: {
      nome: "",
    },
  });

  function onSubmitDJ(values: z.infer<typeof formSchemaDJ>) {}

  return (
    <div className="animate-slideToRightFade">
      <Form {...formDJ}>
        <form onSubmit={formDJ.handleSubmit(onSubmitDJ)} className="space-y-4">
          <FormField
            control={formDJ.control}
            name="nome"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome</FormLabel>
                <FormControl>
                  <Input
                    placeholder="
                          Insira o nome"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="bg-green text-white hover:bg-green-600"
          >
            Realizar inscrição
          </Button>
        </form>
      </Form>
    </div>
  );
}
