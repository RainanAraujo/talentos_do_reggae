"use client";
import React from "react";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../components/Form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/Select";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "../components/Button";
import { useRouter } from "next/navigation";

const formSchemaCategory = z.object({
  categoria: z.enum(["band", "dj", "dancer"], {
    required_error: "Seleção obrigatória",
  }),
});

export default function FormCategory() {
  const router = useRouter();
  const formCategory = useForm<z.infer<typeof formSchemaCategory>>({
    resolver: zodResolver(formSchemaCategory),
    defaultValues: {
      categoria: undefined,
    },
  });

  function onSubmitCategory(values: z.infer<typeof formSchemaCategory>) {
    values.categoria === "band" && router.push("/subscribe/band");
  }

  return (
    <Form {...formCategory}>
      <form
        onSubmit={formCategory.handleSubmit(onSubmitCategory)}
        className="space-y-4"
      >
        <FormField
          control={formCategory.control}
          name="categoria"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Categoria</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione uma categoria" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="band">Banda</SelectItem>
                  <SelectItem value="dj">Dj</SelectItem>
                  <SelectItem value="dancer">Dançarino(a)</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <p className="text-sm">
          OBS: Apenas bandas poderão participar do concurso. As demais
          categorias poderão se inscrever para apresentações no evento e receber
          apoio financeiro.
        </p>
        <Button
          type="submit"
          className="bg-green text-white hover:bg-green-600"
        >
          Próximo
        </Button>
      </form>
    </Form>
  );
}
