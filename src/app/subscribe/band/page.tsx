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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/components/Select";
import { INSTRUMENTOS } from "@/configs/instrumentos";
import { APIController } from "@/controllers/api.controller";
import { bandSchema } from "@/models/band.model";
import { isValidCPF } from "@/utils/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Minus } from "lucide-react";
import { useReCaptcha } from "next-recaptcha-v3";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "sonner";
import { useHookFormMask } from "use-mask-input";
import { z } from "zod";
import Button from "../../components/Button";

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
  const router = useRouter();
  const { executeRecaptcha } = useReCaptcha();

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
      cantores: [{ nome: "", nascimento: undefined, cpf: "" }],
      instrumentistas: [
        { nome: "", nascimento: "", cpf: "", instrumento: null },
      ],
      videoLinkURL: "",
      terms: false,
      privacy: false,
    },
  });

  const registerWithMask = useHookFormMask(formBand.register);

  async function onSubmitBand(values: z.infer<typeof bandAuthorizedSchema>) {
    try {
      const token = await executeRecaptcha("subscribe");
      if (!token) {
        throw new Error("Erro ao validar o reCAPTCHA.");
      }
      const band = bandSchema.parse(values);
      const controller = await APIController.getInstance();
      await controller.register({
        ...band,
        type: "band",
        recaptchaToken: token,
      });
      toast.success("Inscrição realizada com sucesso!");
      router.push("/successfull");
    } catch (error) {
      let message = "Erro ao realizar inscrição, tente novamente.";
      if (error instanceof Error) {
        message = error.message;
      }
      toast.error(message);
    }
  }

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
          <div className="flex flex-col gap-8 pb-4 pt-6">
            <div className="flex flex-col">
              <div className="flex justify-between">
                <h4 className="font-bold text-lg">Cantor/a/es/as</h4>
              </div>
              <div className="pl-4 space-y-2">
                {cantores.map((_, index) => (
                  <div
                    className="flex flex-col animate-fadeInFast gap-y-2 mt-3"
                    key={index}
                  >
                    <div className="flex justify-between text-base font-bold">
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
                            <Input
                              placeholder="Insira o CPF"
                              {...field}
                              {...registerWithMask(
                                `cantores.${index}.cpf`,
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
                    <div className="w-full h-[1px] bg-zinc-600 my-2" />
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
            <div className="flex flex-col ">
              <div className="flex justify-between">
                <h4 className="font-bold text-lg">Instrumentista(s)</h4>
              </div>
              <div className="pl-4 space-y-2">
                {instrumentistas.map((_, index) => (
                  <div
                    className="flex flex-col animate-fadeInFast gap-y-2 mt-3"
                    key={index}
                  >
                    <div className="flex justify-between  text-base font-bold">
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
                            <Input
                              placeholder="Insira o CPF"
                              {...field}
                              {...registerWithMask(
                                `instrumentistas.${index}.cpf`,
                                ["999.999.999-99"],
                                {
                                  validate: isValidCPF,
                                  required: true,
                                }
                              )}
                            />
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
                    <div className="w-full h-[1px] bg-zinc-600 my-2" />
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
