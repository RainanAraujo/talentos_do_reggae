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

import { Checkbox } from "@/app/components/Checkbox";
import { Input } from "@/app/components/Input";
import { APIController } from "@/controllers/api.controller";
import { djSchema } from "@/models/dj.model";
import { zodResolver } from "@hookform/resolvers/zod";
import { useReCaptcha } from "next-recaptcha-v3";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useHookFormMask } from "use-mask-input";
import { z } from "zod";

import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
  DialogHeader,
  DialogFooter,
} from "@/app/components/Dialog";
import React from "react";
import Button from "@/app/components/Button";

const djAuthorizedSchema = djSchema.extend({
  terms: z.boolean().refine((value) => value, {
    message:
      "Para prosseguir é preciso estar de acordo com os termos e condições. ",
  }),
  privacy: z.boolean().refine((value) => value, {
    message:
      "Para prosseguir é preciso estar de acordo com a Política de Privacidade.",
  }),
  maranhense: z.boolean().refine((value) => value, {
    message: "Para realizar a inscrição é preciso ser maranhense.",
  }),
});

export default function FormDJ() {
  const router = useRouter();
  const { executeRecaptcha } = useReCaptcha();
  const [confirmDialog, setConfirmDialog] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const formDJ = useForm<z.infer<typeof djAuthorizedSchema>>({
    resolver: zodResolver(djAuthorizedSchema),
    defaultValues: {
      nome: "",
      cpf: "",
      email: "",
      tel: "",
      nascimento: "",
      ig: "",
      videoLinkURL: "",
      terms: false,
      privacy: false,
    },
  });

  const registerWithMask = useHookFormMask(formDJ.register);

  async function onSubmitDJ(values: z.infer<typeof djAuthorizedSchema>) {
    setIsLoading(true);
    try {
      const token = await executeRecaptcha("subscribe");
      if (!token) {
        throw new Error("Erro ao validar o reCAPTCHA.");
      }
      const dj = djSchema.parse(values);
      const controller = await APIController.getInstance();
      await controller.register({
        ...dj,
        type: "dj",
        recaptchaToken: token,
      });
      setIsLoading(false);
      setConfirmDialog(false);
      toast.success("Inscrição realizada com sucesso.");
      router.push("/successful");
    } catch (error) {
      setIsLoading(false);
      setConfirmDialog(false);
      let message = "Erro ao realizar inscrição, tente novamente.";
      if (error instanceof Error) {
        message = error.message;
      }
      toast.error(message);
    }
  }

  return (
    <div className="animate-slideToRightFade">
      <h1 className="text-xl font-bold text-white mb-3">Categoria DJ</h1>
      <Form {...formDJ}>
        <form
          id="form"
          onSubmit={formDJ.handleSubmit(onSubmitDJ)}
          className="space-y-4"
        >
          <FormField
            control={formDJ.control}
            name="nome"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome *</FormLabel>
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
            name={"cpf"}
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
          <FormField
            control={formDJ.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email *</FormLabel>
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
                <FormLabel>Telefone *</FormLabel>
                <FormControl>
                  <Input
                    type="tel"
                    placeholder="Insira o telefone"
                    {...field}
                    {...registerWithMask("tel", ["(99) 99999-9999"], {
                      required: true,
                    })}
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
                <FormLabel>Data de nascimento *</FormLabel>
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
                <FormLabel>Link do Instagram *</FormLabel>
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
                <FormLabel>Link do vídeo para avaliação *</FormLabel>
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
                  <Link
                    className="cursor-pointer underline"
                    target="_blank"
                    href={"/terms-and-conditions"}
                  >
                    Termos e Condições
                  </Link>
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
                  <Link
                    className="cursor-pointer underline"
                    target="_blank"
                    href={"/privacy-policy"}
                  >
                    Política de Privacidade
                  </Link>
                  . *
                </FormLabel>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={formDJ.control}
            name="maranhense"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormLabel className="font-normal  ml-2">
                  Declaro viver no maranhão. *
                </FormLabel>
                <FormMessage />
              </FormItem>
            )}
          />
          <Dialog open={confirmDialog} onOpenChange={setConfirmDialog}>
            <Button
              type="button"
              onClick={() =>
                formDJ.trigger().then((isValid) => {
                  if (isValid) {
                    return setConfirmDialog(true);
                  }
                })
              }
              className="bg-green text-white hover:bg-green-600"
            >
              Realizar inscrição
            </Button>
            <DialogContent className="sm:max-w-md max-h-[90%] overflow-y-scroll ">
              <DialogHeader>
                <DialogTitle>Verifique seus dados</DialogTitle>
                <DialogDescription>
                  Verifique se todos os dados estão corretos antes de realizar a
                  inscrição.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 [&_p]:truncate [&_p]:w-full truncate ">
                <div>
                  <h4 className="font-bold text-base ">DJ</h4>
                  <div className="font-light text-sm ">
                    <p>Nome: {formDJ.getValues().nome}</p>
                    <p>Email: {formDJ.getValues().email}</p>
                    <p>Telefone: {formDJ.getValues().tel}</p>
                    <p>CPF: {formDJ.getValues().cpf}</p>
                    <p>Data de nascimento: {formDJ.getValues().nascimento}</p>
                    <p>
                      Link Instagram:{" "}
                      <a
                        href={formDJ.getValues().ig}
                        target="_blank"
                        className="text-blue-500"
                      >
                        {formDJ.getValues().ig}
                      </a>
                    </p>
                    <p>
                      Link do vídeo:{" "}
                      <a
                        href={formDJ.getValues().videoLinkURL}
                        target="_blank"
                        className="text-blue-500"
                      >
                        {formDJ.getValues().videoLinkURL}
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <DialogFooter className="sm:justify-start">
                <DialogClose asChild>
                  <Button className="border-zinc-600 border text-white">
                    Voltar e corrigir dados
                  </Button>
                </DialogClose>
                <Button
                  form="form"
                  type="submit"
                  className="bg-green text-white hover:bg-green-600 disabled:bg-gray-600 w-full"
                  disabled={isLoading}
                >
                  {isLoading
                    ? "Realizando inscrição..."
                    : "Confirmar e Realizar inscrição"}
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </form>
      </Form>
    </div>
  );
}
