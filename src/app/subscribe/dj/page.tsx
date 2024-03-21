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
import Button from "../../components/Button";

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
  const router = useRouter();
  const { executeRecaptcha } = useReCaptcha();

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
      toast.success("Inscrição realizada com sucesso.");
      router.push("/successful");
    } catch (error) {
      let message = "Erro ao realizar inscrição, tente novamente.";
      if (error instanceof Error) {
        message = error.message;
      }
      toast.error(message);
    }
  }

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
