import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FiArrowRight } from "react-icons/fi";
import { contactSchema } from "../schemas/contactSchema";

function Formulario() {
  const [sent, setSent] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactSchema),
  });

  function onSubmit(data) {
    console.log("Dados validados com sucesso:", data);

    setSent(true);
  }

  return (
    <form
      className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6 shadow-2xl shadow-black/20 sm:p-8"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="grid gap-6 sm:grid-cols-2">

        <label className="grid gap-2 text-sm font-semibold text-slate-200">
          Nome

          <input
            {...register("name")}
            className={`h-12 rounded-lg border bg-slate-950 px-4 text-sm font-normal text-white outline-none transition placeholder:text-slate-600 focus:ring-2 focus:ring-cyan-400/20 ${
              errors.name
                ? "border-red-500 focus:border-red-500"
                : "border-slate-700 focus:border-cyan-400"
            }`}
            placeholder="Seu nome completo"
          />

          {errors.name && (
            <span className="text-xs font-normal text-red-400">
              {errors.name.message}
            </span>
          )}
        </label>

        <label className="grid gap-2 text-sm font-semibold text-slate-200">
          E-mail

          <input
            {...register("email")}
            type="email"
            className={`h-12 rounded-lg border bg-slate-950 px-4 text-sm font-normal text-white outline-none transition placeholder:text-slate-600 focus:ring-2 focus:ring-cyan-400/20 ${
              errors.email
                ? "border-red-500 focus:border-red-500"
                : "border-slate-700 focus:border-cyan-400"
            }`}
            placeholder="seu@email.com"
          />

          {errors.email && (
            <span className="text-xs font-normal text-red-400">
              {errors.email.message}
            </span>
          )}
        </label>

      </div>

      <label className="mt-6 grid gap-2 text-sm font-semibold text-slate-200">
        Assunto

        <input
          {...register("subject")}
          className={`h-12 rounded-lg border bg-slate-950 px-4 text-sm font-normal text-white outline-none transition placeholder:text-slate-600 focus:ring-2 focus:ring-cyan-400/20 ${
            errors.subject
              ? "border-red-500 focus:border-red-500"
              : "border-slate-700 focus:border-cyan-400"
          }`}
          placeholder="Sobre o que deseja falar?"
        />

        {errors.subject && (
          <span className="text-xs font-normal text-red-400">
            {errors.subject.message}
          </span>
        )}
      </label>

      <label className="mt-6 grid gap-2 text-sm font-semibold text-slate-200">
        Mensagem

        <textarea
          {...register("message")}
          className={`resize-y rounded-lg border bg-slate-950 px-4 py-3 text-sm font-normal leading-6 text-white outline-none transition placeholder:text-slate-600 focus:ring-2 focus:ring-cyan-400/20 ${
            errors.message
              ? "border-red-500 focus:border-red-500"
              : "border-slate-700 focus:border-cyan-400"
          }`}
          placeholder="Escreva sua mensagem..."
          rows="6"
        />

        {errors.message && (
          <span className="text-xs font-normal text-red-400">
            {errors.message.message}
          </span>
        )}
      </label>

      <button
        className="mt-8 inline-flex h-12 w-full items-center justify-center gap-3 rounded-lg bg-cyan-400 px-5 text-sm font-bold text-slate-950 transition hover:bg-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-slate-900 active:scale-[0.99] disabled:cursor-default disabled:bg-emerald-400"
        type="submit"
        disabled={sent}
      >
        {sent ? "Mensagem enviada" : "Enviar mensagem"}

        <FiArrowRight
          className="text-lg"
          aria-hidden="true"
        />
      </button>

    </form>
  );
}

export default Formulario;