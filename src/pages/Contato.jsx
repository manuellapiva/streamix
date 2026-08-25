import { FiClock, FiMail } from 'react-icons/fi'
import Formulario from '../components/Formulario'

const contactDetails = [
  { label: 'E-MAIL', value: 'contato@streamix.io', icon: FiMail },
  { label: 'RESPOSTA EM', value: 'Até 48 horas úteis', icon: FiClock },
]

function Contato() {
  return (
    <main className="contact-page">
      <div className="contact-layout">
        <section className="contact-content" aria-labelledby="contact-title">
          <p className="contact-eyebrow">FALE CONOSCO</p>
          <h1 id="contact-title">Entre em contato</h1>
          <p className="contact-description">
            Tem uma sugestão de filme, encontrou algum problema ou apenas quer
            conversar sobre cinema? Nossa equipe adoraria ouvir você.
          </p>

          <div className="contact-details">
            {contactDetails.map(({ label, value, icon: Icon }) => (
              <div className="contact-detail" key={label}>
                <div className="contact-icon" aria-hidden="true">
                  <Icon />
                </div>
                <div>
                  <p className="contact-label">{label}</p>
                  <p className="contact-value">{value}</p>
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
