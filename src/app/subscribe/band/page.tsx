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

const formSchemaBand = z.object({
  nome: z.string().min(1, { message: "Campo obrigatório" }),
  ig: z.string().min(1, { message: "Campo obrigatório" }),
  email: z.string().email({ message: "Email inválido" }),
  tel: z.string().min(1, { message: "Campo obrigatório" }),
  cantores: z
    .array(
      z.object({
        nome: z.string().min(1, { message: "Campo obrigatório" }),
        nascimento: z.string().min(1, { message: "Campo obrigatório" }),
        cpf: z.string().min(1, { message: "Campo obrigatório" }),
      })
    )
    .min(1, { message: "É necessário inserir pelo menos um cantor" }),
  instrumentistas: z
    .array(
      z.object({
        nome: z.string().min(1, { message: "Campo obrigatório" }),
        nascimento: z.string().min(1, { message: "Campo obrigatório" }),
        cpf: z.string().min(1, { message: "Campo obrigatório" }),
        instrumento: z.enum(INSTRUMENTOS),
      })
    )
    .min(1, { message: "É necessário inserir pelo menos um músico" }),
  videoLinkURL: z.string().url({ message: "URL inválida" }),
});

type FormBand = z.infer<typeof formSchemaBand>;

export default function FormBand() {
  const formBand = useForm<z.infer<typeof formSchemaBand>>({
    resolver: zodResolver(formSchemaBand),
    defaultValues: {
      nome: "",
    },
  });

  function onSubmitBand(values: z.infer<typeof formSchemaBand>) {}

  return (
    <div className="animate-slideToRightFade">
      <Form {...formBand}>
        <form
          onSubmit={formBand.handleSubmit(onSubmitBand)}
          className="space-y-4"
        >
          <FormField
            control={formBand.control}
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
