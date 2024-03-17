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
import { Checkbox } from "@/app/components/Checkbox";

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
        instrumento: z.enum(INSTRUMENTOS, {
          required_error: "Seleção obrigatória",
        }),
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
      ig: "",
      email: "",
      tel: "",
      cantores: [{ nome: "", nascimento: "", cpf: "" }],
      instrumentistas: [
        { nome: "", nascimento: "", cpf: "", instrumento: undefined },
      ],
      videoLinkURL: "",
    },
  });

  function onSubmitBand(values: z.infer<typeof formSchemaBand>) {}

  return (
    <div className="animate-slideToRightFade ">
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
                <FormLabel>Nome da banda *</FormLabel>
                <FormControl>
                  <Input
                    placeholder="
                          Insira o nome da banda"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={formBand.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email *</FormLabel>
                <FormControl>
                  <Input
                    placeholder="
                          Insira o email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={formBand.control}
            name="tel"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Telefone para contato *</FormLabel>
                <FormControl>
                  <Input
                    placeholder="
                          Insira o telefone para contato"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={formBand.control}
            name="ig"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Instagram *</FormLabel>
                <FormControl>
                  <Input
                    placeholder="
                          Insira o Instagram"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
                <FormDescription>
                  Insira o Instagram da banda ou um de referência
                </FormDescription>
              </FormItem>
            )}
          />
          <FormField
            control={formBand.control}
            name="videoLinkURL"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Link do video *</FormLabel>
                <FormControl>
                  <Input
                    placeholder="
                          Insira o link do vídeo da apresentação"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
                <FormDescription>
                  O link deve ser um vídeo publicado no YouTube dedicado para o
                  evento Talentos do Reggae com a data de publicação a partir de
                  30 de março de 2024 constando todos os integrantes da banda.
                </FormDescription>
              </FormItem>
            )}
          />

          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Aceito os termos e condições.
            </label>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Li e concordo com a Política de Privacidade.
            </label>
          </div>

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
