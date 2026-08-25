import { useState } from 'react'
import { FiArrowRight } from 'react-icons/fi'

function Formulario() {
  const [sent, setSent] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    setSent(true)
  }

  return (
    <form className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6 shadow-2xl shadow-black/20 sm:p-8" onSubmit={handleSubmit}>
      <div className="grid gap-6 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-slate-200">
          Nome
          <input className="h-12 rounded-lg border border-slate-700 bg-slate-950 px-4 text-sm font-normal text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20" name="name" placeholder="Seu nome completo" required />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-slate-200">
          E-mail
          <input className="h-12 rounded-lg border border-slate-700 bg-slate-950 px-4 text-sm font-normal text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20" type="email" name="email" placeholder="seu@email.com" required />
        </label>
      </div>
      <label className="mt-6 grid gap-2 text-sm font-semibold text-slate-200">
        Assunto
        <input className="h-12 rounded-lg border border-slate-700 bg-slate-950 px-4 text-sm font-normal text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20" name="subject" placeholder="Sobre o que deseja falar?" required />
      </label>
      <label className="mt-6 grid gap-2 text-sm font-semibold text-slate-200">
        Mensagem
        <textarea className="resize-y rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-sm font-normal leading-6 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20" name="message" placeholder="Escreva sua mensagem..." rows="6" required />
      </label>
      <button className="mt-8 inline-flex h-12 w-full items-center justify-center gap-3 rounded-lg bg-cyan-400 px-5 text-sm font-bold text-slate-950 transition hover:bg-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-slate-900 active:scale-[0.99] disabled:cursor-default disabled:bg-emerald-400" type="submit" disabled={sent}>
        {sent ? 'Mensagem enviada' : 'Enviar mensagem'}
        <FiArrowRight className="text-lg" aria-hidden="true" />
      </button>
    </form>
  )
}

export default Formulario

