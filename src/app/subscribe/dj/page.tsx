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
import { DJ, djSchema } from "@/models/dj.model";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "../../components/Button";

export default function FormDJ() {
  const formDJ = useForm<DJ>({
    resolver: zodResolver(djSchema),
    defaultValues: {
      nome: "",
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
