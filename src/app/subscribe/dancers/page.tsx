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
import { dancersSchema } from "@/models/dancers.model";
import { zodResolver } from "@hookform/resolvers/zod";
import { useReCaptcha } from "next-recaptcha-v3";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useHookFormMask } from "use-mask-input";
import { z } from "zod";
import Button from "../../components/Button";

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
  const router = useRouter();
  const { executeRecaptcha } = useReCaptcha();
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

  const registerWithMask = useHookFormMask(formDancers.register);

  async function onSubmitDancers(
    values: z.infer<typeof dancersAuthorizedSchema>
  ) {
    try {
      const token = await executeRecaptcha("subscribe");
      if (!token) {
        throw new Error("Erro ao validar o reCAPTCHA.");
      }
      const dancers = dancersSchema.parse(values);
      const controller = await APIController.getInstance();
      await controller.register({
        ...dancers,
        type: "dancers",
        recaptchaToken: token,
      });
      toast.success("Inscrição realizada com sucesso!");
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
                  <Input
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
                          <Input
                            placeholder="Insira o CPF"
                            {...field}
                            {...registerWithMask(
                              `dancarinos.0.cpf`,
                              ["999.999.999-99"],
                              {
                                required: true,
                              }
                            )}
                          />
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
                    name="dancarinos.1.nome"
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
                    name="dancarinos.1.nascimento"
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
                    name="dancarinos.1.cpf"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>CPF</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Insira o CPF"
                            {...field}
                            {...registerWithMask(
                              `dancarinos.1.cpf`,
                              ["999.999.999-99"],
                              {
                                required: true,
                              }
                            )}
                          />
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
