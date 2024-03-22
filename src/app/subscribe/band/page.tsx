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
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/components/Dialog";
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
import { isValidBirthData, isValidCPF } from "@/utils/validation";
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
import { Label } from "@/app/components/Label";

const bandAuthorizedSchema = bandSchema.extend({
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

export default function FormBand() {
  const router = useRouter();
  const { executeRecaptcha } = useReCaptcha();

  const [cantores, setCantores] = React.useState([
    { nome: "", nascimento: "", cpf: "" },
  ]);
  const [instrumentistas, setInstrumentistas] = React.useState([
    { nome: "", nascimento: "", cpf: "", instrumento: null },
  ]);
  const [confirmDialog, setConfirmDialog] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
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
    setIsLoading(true);
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
      setIsLoading(false);
      setConfirmDialog(false);
      toast.success("Inscrição realizada com sucesso!");
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
    <div className="animate-slideToRightFade ">
      <h1 className="text-xl font-bold text-white mb-3">Categoria Banda</h1>
      <Form {...formBand}>
        <form
          id="form"
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
                <FormLabel>Link do video para avaliação*</FormLabel>
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
          <FormField
            control={formBand.control}
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
                  Declaro ser maranhense. *
                </FormLabel>
                <FormMessage />
              </FormItem>
            )}
          />
          <Dialog open={confirmDialog} onOpenChange={setConfirmDialog}>
            <Button
              type="button"
              onClick={() =>
                formBand.trigger().then((isValid) => {
                  if (isValid) {
                    return setConfirmDialog(true);
                  }
                })
              }
              className="bg-green text-white hover:bg-green-600"
            >
              Realizar inscrição
            </Button>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Verifique seus dados</DialogTitle>
                <DialogDescription>
                  Verifique se todos os dados estão corretos antes de realizar a
                  inscrição.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 [&_p]:truncate [&_p]:w-full truncate ">
                <div>
                  <h4 className="font-bold text-base ">Banda</h4>
                  <div className="font-light text-sm ">
                    <p>Nome: {formBand.getValues().nome}</p>
                    <p>Email: {formBand.getValues().email}</p>
                    <p>Telefone: {formBand.getValues().tel}</p>
                    <p>
                      Link Instagram:{" "}
                      <a
                        href={formBand.getValues().ig}
                        target="_blank"
                        className="text-blue-500"
                      >
                        {formBand.getValues().ig}
                      </a>
                    </p>
                    <p>
                      Link do vídeo:{" "}
                      <a
                        href={formBand.getValues().videoLinkURL}
                        target="_blank"
                        className="text-blue-500"
                      >
                        {formBand.getValues().videoLinkURL}
                      </a>
                    </p>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-base ">Cantores</h4>
                  {formBand.getValues().cantores.map((cantor, index) => (
                    <div key={index} className="font-light text-sm  pl-2 pb-2">
                      <p>Nome: {cantor.nome}</p>
                      <p>Data de nascimento: {cantor.nascimento}</p>
                      <p>CPF: {cantor.cpf}</p>
                    </div>
                  ))}
                </div>
                <div>
                  <h4 className="font-bold text-base">Instrumentistas</h4>
                  {formBand
                    .getValues()
                    .instrumentistas.map((instrumentista, index) => (
                      <div key={index} className="font-light text-sm pl-2 pb-2">
                        <p>Nome: {instrumentista.nome}</p>
                        <p>Data de nascimento: {instrumentista.nascimento}</p>
                        <p>CPF: {instrumentista.cpf}</p>
                        <p>Instrumento: {instrumentista.instrumento}</p>
                      </div>
                    ))}
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
