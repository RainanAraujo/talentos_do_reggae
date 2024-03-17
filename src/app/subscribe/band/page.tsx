"use client";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../components/Form";

import { Input } from "@/app/components/Input";
import { Band, bandSchema } from "@/models/band.model";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "../../components/Button";

export default function FormBand() {
  const formBand = useForm<Band>({
    resolver: zodResolver(bandSchema),
    defaultValues: {
      nome: "",
    },
  });

  function onSubmitBand(values: Band) {}

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
