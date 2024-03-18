"use client";
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

import { Input } from "@/app/components/Input";
import { Band, bandSchema } from "@/models/band.model";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "../../components/Button";
import { Checkbox } from "@/app/components/Checkbox";
import { z } from "zod";
import { Minus, Plus } from "lucide-react";
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/components/Select";
import { INSTRUMENTOS } from "@/configs/instrumentos";
import { toast } from "sonner";

const bandAuthorizedSchema = bandSchema.extend({
  terms: z.boolean().refine((value) => value, {
    message:
      "Para prosseguir é preciso estar de acordo com os termos e condições. ",
  }),
  privacy: z.boolean().refine((value) => value, {
    message:
      "Para prosseguir é preciso estar de acordo com a Política de Privacidade.",
  }),
});

export default function FormBand() {
  const [cantores, setCantores] = React.useState([
    { nome: "", nascimento: "", cpf: "" },
  ]);
  const [instrumentistas, setInstrumentistas] = React.useState([
    { nome: "", nascimento: "", cpf: "", instrumento: null },
  ]);

  const formBand = useForm<z.infer<typeof bandAuthorizedSchema>>({
    resolver: zodResolver(bandAuthorizedSchema),
    defaultValues: {
      nome: "",
      ig: "",
      email: "",
      tel: "",
      cantores: [{ nome: "", nascimento: "", cpf: "" }],
      instrumentistas: [
        { nome: "", nascimento: "", cpf: "", instrumento: null },
      ],
      videoLinkURL: "",
      terms: false,
      privacy: false,
    },
  });

  function onSubmitBand(values: Band) {}

  return (
    <div className="animate-slideToRightFade ">
      <Form {...formBand}>
        <form
          onSubmit={formBand.handleSubmit(onSubmitBand)}
          className="space-y-4  "
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
                <FormLabel>Link do perfil do Instagram *</FormLabel>
                <FormControl>
                  <Input
                    placeholder="
                          Insira o perfil do Instagram"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
                <FormDescription>
                  Insira o link do perfil do Instagram da banda ou um de
                  referência.
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
          <div className="flex flex-col gap-8 pb-4">
            <div className="flex flex-col gap-4">
              <div className="flex justify-between  ">
                <h4>Cantor/a/es/as</h4>
              </div>
              <div className="pl-4 space-y-2">
                {cantores.map((_, index) => (
                  <div
                    className="flex flex-col animate-fadeInFast gap-y-4"
                    key={index}
                  >
                    <div className="flex justify-between">
                      Cantor(a) {index + 1} *
                      {index != 0 && (
                        <Minus
                          className="cursor-pointer  border-2 rounded-full"
                          onClick={() => {
                            formBand.setValue("cantores", [
                              ...formBand.getValues().cantores.slice(0, index),
                              ...formBand.getValues().cantores.slice(index + 1),
                            ]);
                            setCantores([
                              ...cantores.slice(0, index),
                              ...cantores.slice(index + 1),
                            ]);
                          }}
                        />
                      )}
                    </div>
                    <FormField
                      control={formBand.control}
                      name={`cantores.${index}.nome`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nome do(a) Cantor(a) *</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Insira o nome do cantor"
                              {...field}
                            />
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={formBand.control}
                      name={`cantores.${index}.nascimento`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Data de nascimento *</FormLabel>
                          <FormControl>
                            <Input type="date" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={formBand.control}
                      name={`cantores.${index}.cpf`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>CPF *</FormLabel>
                          <FormControl>
                            <Input placeholder="Insira o CPF" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <div className="w-full h-[1px] bg-zinc-600 " />
                  </div>
                ))}
                <div
                  className="cursor-pointer flex items-center justify-center py-1 text-sm border-[1px] rounded-sm"
                  onClick={() => {
                    formBand.setValue("cantores", [
                      ...formBand.getValues().cantores,
                      { nome: "", nascimento: "", cpf: "" },
                    ]);
                    setCantores([
                      ...cantores,
                      { nome: "", nascimento: "", cpf: "" },
                    ]);
                  }}
                >
                  Adicionar mais um Cantor(a)
                </div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-4">
                <h4>Instrumentista(s)</h4>
              </div>
              <div className="pl-4 space-y-2">
                {instrumentistas.map((_, index) => (
                  <div
                    className="flex flex-col animate-fadeInFast  gap-y-4"
                    key={index}
                  >
                    <div className="flex justify-between">
                      Instrumentista {index + 1} *
                      {index != 0 && (
                        <Minus
                          className="cursor-pointer  border-2 rounded-full"
                          onClick={() => {
                            formBand.setValue("instrumentistas", [
                              ...formBand
                                .getValues()
                                .instrumentistas.slice(0, index),
                              ...formBand
                                .getValues()
                                .instrumentistas.slice(index + 1),
                            ]);
                            setInstrumentistas([
                              ...instrumentistas.slice(0, index),
                              ...instrumentistas.slice(index + 1),
                            ]);
                          }}
                        />
                      )}
                    </div>
                    <FormField
                      control={formBand.control}
                      name={`instrumentistas.${index}.nome`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nome do(a) Instrumentista *</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Insira o nome do cantor"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={formBand.control}
                      name={`instrumentistas.${index}.nascimento`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Data de nascimento *</FormLabel>
                          <FormControl>
                            <Input type="date" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={formBand.control}
                      name={`instrumentistas.${index}.cpf`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>CPF *</FormLabel>
                          <FormControl>
                            <Input placeholder="Insira o CPF" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={formBand.control}
                      name={`instrumentistas.${index}.instrumento`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Instrumento *</FormLabel>
                          <Select onValueChange={field.onChange}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Selecione uma categoria" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {INSTRUMENTOS.map((item) => (
                                <SelectItem key={item} value={item}>
                                  {item}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <div className="w-full h-[1px] bg-zinc-600" />
                  </div>
                ))}
                <div
                  className="cursor-pointer flex items-center justify-center py-1 text-sm border-[1px] rounded-sm"
                  onClick={() => {
                    formBand.setValue("instrumentistas", [
                      ...formBand.getValues().instrumentistas,
                      {
                        nome: "",
                        nascimento: "",
                        cpf: "",
                        instrumento: null,
                      },
                    ]);
                    setInstrumentistas([
                      ...instrumentistas,
                      {
                        nome: "",
                        nascimento: "",
                        cpf: "",
                        instrumento: null,
                      },
                    ]);
                  }}
                >
                  Adicionar mais um Instrumentista
                </div>
              </div>
            </div>
          </div>

          <FormField
            control={formBand.control}
            name="terms"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormLabel className="font-normal ml-2">
                  Aceito os{" "}
                  <a className="cursor-pointer underline">termos e condições</a>
                  . *
                </FormLabel>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={formBand.control}
            name="privacy"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormLabel className="font-normal  ml-2">
                  Li e concordo com a{" "}
                  <a className="cursor-pointer underline">
                    Política de Privacidade
                  </a>
                  . *
                </FormLabel>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="bg-green text-white hover:bg-green-600"
            onClick={() => toast.error("Possui CPF já inscrito")}
          >
            Realizar inscrição
          </Button>
        </form>
      </Form>
    </div>
  );
}
