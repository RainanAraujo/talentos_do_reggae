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
import { DJ, djSchema } from "@/models/dj.model";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "../../components/Button";
import { z } from "zod";
import { Checkbox } from "@/app/components/Checkbox";

const djAuthorizedSchema = djSchema.extend({
  terms: z.boolean().refine((value) => value, {
    message:
      "Para prosseguir é preciso estar de acordo com os termos e condições. ",
  }),
  privacy: z.boolean().refine((value) => value, {
    message:
      "Para prosseguir é preciso estar de acordo com a Política de Privacidade.",
  }),
});

export default function FormDJ() {
  const formDJ = useForm<z.infer<typeof djAuthorizedSchema>>({
    resolver: zodResolver(djAuthorizedSchema),
    defaultValues: {
      nome: "",
      email: "",
      tel: "",
      nascimento: "",
      ig: "",
      videoLinkURL: "",
      terms: false,
      privacy: false,
    },
  });

  function onSubmitDJ(values: DJ) {}

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
          <FormField
            control={formDJ.control}
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
            control={formDJ.control}
            name="tel"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Telefone</FormLabel>
                <FormControl>
                  <Input
                    type="tel"
                    placeholder="Insira o telefone"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={formDJ.control}
            name="nascimento"
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
            control={formDJ.control}
            name="ig"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Instagram</FormLabel>
                <FormControl>
                  <Input placeholder="Insira o link do instagram" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={formDJ.control}
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
                  com a data de publicação a partir de 30 de março de 2024.
                </FormDescription>
              </FormItem>
            )}
          />
          <FormField
            control={formDJ.control}
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
            control={formDJ.control}
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
