import { FiClock, FiMail } from 'react-icons/fi'
import Formulario from '../components/Formulario'

const contactDetails = [
  { label: 'E-MAIL', value: 'contato@streamix.io', icon: FiMail },
  { label: 'RESPOSTA EM', value: 'Até 48 horas úteis', icon: FiClock },
]

function Contato() {
  return (
    <main className="min-h-screen bg-slate-950 px-5 py-16 text-slate-100 sm:px-8 lg:px-12 lg:py-24">
      <div className="mx-auto grid max-w-6xl items-start gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-24">
        <section className="contact-content" aria-labelledby="contact-title">
          <p className="mb-5 text-sm font-bold tracking-[0.28em] text-cyan-400">FALE CONOSCO</p>
          <h1 id="contact-title" className="max-w-lg font-serif text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Entre em contato
          </h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
            Tem uma sugestão de filme, encontrou algum problema ou apenas quer
            conversar sobre cinema? Nossa equipe adoraria ouvir você.
          </p>

          <div className="mt-10 space-y-6 border-t border-slate-800 pt-8">
            {contactDetails.map(({ label, value, icon: Icon }) => (
              <div className="flex items-center gap-4" key={label}>
                <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-xl text-cyan-400" aria-hidden="true">
                  <Icon strokeWidth={1.8} />
                </div>
                <div>
                  <p className="text-xs font-bold tracking-[0.18em] text-slate-500">{label}</p>
                  <p className="mt-1 text-base font-medium text-slate-200">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <Formulario />
      </div>
    </main>
  )
}

export default Contato

