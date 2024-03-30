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
import { useRouter } from "next/navigation";
import { z } from "zod";
import Button from "../components/Button";

const formSchemaCategory = z.object({
  categoria: z.enum(["band", "dj", "dancers"], {
    required_error: "Seleção obrigatória",
  }),
});

type FormCategoryValues = z.infer<typeof formSchemaCategory>;

export default function FormCategory() {
  const router = useRouter();
  const formCategory = useForm<FormCategoryValues>({
    resolver: zodResolver(formSchemaCategory),
    defaultValues: {
      categoria: undefined,
    },
  });

  function onSubmitCategory(values: FormCategoryValues) {
    router.push("/subscribe/" + values.categoria);
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
                  <SelectItem value="band">Banda | Concurso</SelectItem>
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
        <p className="text-sm">
          OBS: Cada pessoa só pode ser inscrita uma vez, independentemente da
          categoria escolhida. Isso significa que não é permitido múltiplos
          registros com a mesma pessoa, mesmo em categorias diferentes.
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
