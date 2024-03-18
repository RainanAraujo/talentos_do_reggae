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
import { Dancers, dancersSchema } from "@/models/dancers.model";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "../../components/Button";
import { z } from "zod";
import { Checkbox } from "@/app/components/Checkbox";

const dancersAuthorizedSchema = dancersSchema.extend({
  terms: z.boolean().refine((value) => value, {
    message:
      "Para prosseguir é preciso estar de acordo com os termos e condições. ",
  }),
  privacy: z.boolean().refine((value) => value, {
    message:
      "Para prosseguir é preciso estar de acordo com a Política de Privacidade.",
  }),
});

export default function FormDancers() {
  const formDancers = useForm<z.infer<typeof dancersAuthorizedSchema>>({
    resolver: zodResolver(dancersAuthorizedSchema),
    defaultValues: {
      nome: "",
      email: "",
      ig: "",
      tel: "",
      videoLinkURL: "",
      dancarinos: [
        { nome: "", nascimento: "", cpf: "" },
        { nome: "", nascimento: "", cpf: "" },
      ],
      terms: false,
      privacy: false,
    },
  });

  function onSubmitDancers(values: Dancers) {}

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
                <FormDescription>
                  Nome representativo da dupla de dança.
                </FormDescription>
              </FormItem>
            )}
          />
          <FormField
            control={formDancers.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="Insira o email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={formDancers.control}
            name="ig"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Link do Instagram</FormLabel>
                <FormControl>
                  <Input placeholder="Insira o Link do Instagram" {...field} />
                </FormControl>
                <FormMessage />
                <FormDescription>
                  Insira o link do perfil do Instagram da dupla de dança ou que
                  a represente (um dos integrantes).
                </FormDescription>
              </FormItem>
            )}
          />

          <FormField
            control={formDancers.control}
            name="tel"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Telefone</FormLabel>
                <FormControl>
                  <Input placeholder="Insira o telefone" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={formDancers.control}
            name="videoLinkURL"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Link do vídeo</FormLabel>
                <FormControl>
                  <Input placeholder="Insira o link do vídeo" {...field} />
                </FormControl>
                <FormMessage />
                <FormDescription>
                  O link deve ser um vídeo publicado em qualquer canal de
                  comunicação digital dedicado para o evento Talentos do Reggae
                  com a data de publicação a partir de 30 de março de 2024
                  constando todos os integrantes da dupla de dança.
                </FormDescription>
              </FormItem>
            )}
          />
          <div className="flex flex-col gap-8 pb-4 pt-6">
            <div className="flex flex-col gap-4">
              <div className="flex justify-between">
                <h4 className="font-bold text-lg">Dançarinos (as)</h4>
              </div>
              <div className="pl-4 space-y-4">
                <div className="flex flex-col animate-fadeInFast gap-y-2 mt-3">
                  <div className="flex justify-between text-base font-bold">
                    Dançarino(a) 1
                  </div>
                  <FormField
                    control={formDancers.control}
                    name="dancarinos.0.nome"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nome</FormLabel>
                        <FormControl>
                          <Input placeholder="Insira o nome" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={formDancers.control}
                    name="dancarinos.0.nascimento"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Data de nascimento</FormLabel>
                        <FormControl>
                          <Input
                            type="date"
                            placeholder="Insira a data de nascimento"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={formDancers.control}
                    name="dancarinos.0.cpf"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>CPF</FormLabel>
                        <FormControl>
                          <Input placeholder="Insira o CPF" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="w-full h-[1px] bg-zinc-600 my-4" />
                <div className="flex flex-col animate-fadeInFast gap-y-2 mt-3">
                  <div className="flex justify-between text-base font-bold">
                    Dançarino(a) 2
                  </div>
                  <FormField
                    control={formDancers.control}
                    name="dancarinos.0.nome"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nome</FormLabel>
                        <FormControl>
                          <Input placeholder="Insira o nome" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={formDancers.control}
                    name="dancarinos.0.nascimento"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Data de nascimento</FormLabel>
                        <FormControl>
                          <Input
                            type="date"
                            placeholder="Insira a data de nascimento"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={formDancers.control}
                    name="dancarinos.0.cpf"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>CPF</FormLabel>
                        <FormControl>
                          <Input placeholder="Insira o CPF" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </div>
          </div>

          <FormField
            control={formDancers.control}
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
            control={formDancers.control}
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
          >
            Realizar inscrição
          </Button>
        </form>
      </Form>
    </div>
  );
}
