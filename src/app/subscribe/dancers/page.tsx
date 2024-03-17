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
import { Dancers, dancersSchema } from "@/models/dancers.model";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "../../components/Button";

export default function FormDancers() {
  const formDancers = useForm<Dancers>({
    resolver: zodResolver(dancersSchema),
    defaultValues: {
      nome: "",
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
