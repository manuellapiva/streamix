import { useState } from 'react'
import { FiArrowRight } from 'react-icons/fi'

function Formulario() {
  const [sent, setSent] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    setSent(true)
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label>
          Nome
          <input name="name" placeholder="Seu nome completo" required />
        </label>
        <label>
          E-mail
          <input type="email" name="email" placeholder="seu@email.com" required />
        </label>
      </div>
      <label>
        Assunto
        <input name="subject" placeholder="Sobre o que deseja falar?" required />
      </label>
      <label>
        Mensagem
        <textarea name="message" placeholder="Escreva sua mensagem..." rows="6" required />
      </label>
      <button type="submit">
        {sent ? 'Mensagem enviada' : 'Enviar mensagem'}
        <FiArrowRight aria-hidden="true" />
      </button>
    </form>
  )
}

export default Formulario

