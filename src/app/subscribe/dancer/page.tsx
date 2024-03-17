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

const formSchemaDancers = z.object({
  nome: z.string().min(1, { message: "Campo obrigatório" }).optional(),
  ig: z.string().min(1, { message: "Campo obrigatório" }),
  email: z.string().email({ message: "Email inválido" }),
  tel: z.string().min(1, { message: "Campo obrigatório" }),
  dancarinos: z
    .array(
      z.object({
        nome: z.string().min(1, { message: "Campo obrigatório" }),
        nascimento: z.string().min(1, { message: "Campo obrigatório" }),
        cpf: z.string().min(1, { message: "Campo obrigatório" }),
      })
    )
    .length(2, { message: "É necessário um par de dançarinos" }),
  videoLinkURL: z.string().url({ message: "URL inválida" }),
});

type FormDancers = z.infer<typeof formSchemaDancers>;

export default function FormDancers() {
  const formDancers = useForm<z.infer<typeof formSchemaDancers>>({
    resolver: zodResolver(formSchemaDancers),
    defaultValues: {
      nome: "",
    },
  });

  function onSubmitDancers(values: z.infer<typeof formSchemaDancers>) {}

  return (
    <div className="animate-slideToRightFade">
      <Form {...formDancers}>
        <form
          onSubmit={formDancers.handleSubmit(onSubmitDancers)}
          className="space-y-4"
        >
          <FormField
            control={formDancers.control}
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

          <Button type="submit" className="bg-green text-white">
            Realizar inscrição
          </Button>
        </form>
      </Form>
    </div>
  );
}
