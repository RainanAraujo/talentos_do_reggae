"use client";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
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

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useState } from "react";
import { z } from "zod";
import Button from "../components/Button";

const formSchemaCategory = z.object({
  categoria: z.enum(["band", "dj", "dancers", "singer"], {
    required_error: "Seleção obrigatória",
  }),
});

type FormCategoryValues = z.infer<typeof formSchemaCategory>;

export default function FormCategory() {
  const formCategory = useForm<FormCategoryValues>({
    resolver: zodResolver(formSchemaCategory),
    defaultValues: {
      categoria: undefined,
    },
  });

  const [category, setCategory] = useState<string | undefined>(undefined);

  return (
    <Form {...formCategory}>
      <form className="space-y-4">
        <FormField
          control={formCategory.control}
          name="categoria"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Categoria</FormLabel>
              <Select
                onValueChange={(value) => {
                  setCategory(value);
                  field.onChange(value);
                }}
                defaultValue={field.value}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione uma categoria" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="band">Banda | Concurso</SelectItem>
                  <SelectItem value="singer">
                    Cantor (a) solo | Concurso
                  </SelectItem>
                  <SelectItem value="dj">DJ | Apresentação</SelectItem>
                  <SelectItem value="dancers">
                    Dançarinos (as) | Apresentação
                  </SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex flex-col gap-2">
          <p className="text-sm">
            Obs.: Cada pessoa só pode ser inscrita uma vez, independentemente da
            categoria escolhida. Isso significa que não é permitido múltiplos
            registros com a mesma pessoa, mesmo em categorias diferentes.
          </p>

          <Link
            onClick={() => formCategory.trigger().then(() => {})}
            href={category ? `/subscribe/${category}` : "#!"}
            className="w-min"
          >
            <Button
              type="button"
              className="bg-green text-white hover:bg-green-600"
            >
              Próximo
            </Button>
          </Link>
        </div>
      </form>
    </Form>
  );
}
