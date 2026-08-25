import { z } from "zod";

export const contactSchema = z.object({
  name: z.string()
    .min(3, "O nome deve ter no mínimo 3 caracteres")
    .max(50, "O nome deve ter no máximo 50 caracteres"),

  email: z.string()
    .min(1, "O e-mail é obrigatório")
    .email("Formato de e-mail inválido"),

  subject: z.string()
    .min(3, "O assunto deve ter no mínimo 3 caracteres")
    .max(100, "O assunto deve ter no máximo 100 caracteres"),

  message: z.string()
    .min(10, "A mensagem deve ter no mínimo 10 caracteres")
    .max(500, "A mensagem deve ter no máximo 500 caracteres"),
});