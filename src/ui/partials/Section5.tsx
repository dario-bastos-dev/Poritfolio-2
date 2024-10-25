import { PaperPlaneRight } from "@phosphor-icons/react";
import { StyledSection5 } from "../styles/SectionStyles";

const Section5 = () => {
  return (
    <>
      <StyledSection5>
        <div className="container">
          <h2>Desenvolva seu futuro digital</h2>
          <p className="subtitle">Fale conosco e comece agora!</p>
          <div className="principal">
            <div className="form">
              <form action="">
                <label htmlFor="name">
                  Nome:
                  <input
                    type="text"
                    placeholder="Digite seu nome"
                    name="name"
                    className="input"
                  />
                </label>
                <label htmlFor="phone">
                  WhatsApp:
                  <input
                    type="text"
                    placeholder="Digite seu número"
                    name="phone"
                    className="input"
                  />
                </label>
                <label htmlFor="email">
                  E-mail:
                  <input
                    type="text"
                    placeholder="Digite seu e-mail"
                    name="email"
                    className="input"
                  />
                </label>
                <label htmlFor="soluction">
                  Selecione qual solução voce deseja:
                  <select name="soluction" className="input">
                    <option value="E-comerce" selected>
                      E-comerce
                    </option>
                    <option value="ERP">ERP</option>
                    <option value="Automação">Automação</option>
                    <option value="Site">Site</option>
                  </select>
                </label>
                <label htmlFor="desc">
                  Descreva o projeto:
                  <textarea
                    name="desc"
                    placeholder="Fale mais sobre o que deseja criar"
                    className="input"
                  ></textarea>
                </label>
                <label htmlFor="msg" className="checkbox">
                  <input
                    type="checkbox"
                    name="msg"
                    value="Aceito"
                    className="check"
                  />
                  Aceito receber mensagens pelo e-mail e whatsapp
                </label>

                <button type="submit" className="btn" >
                  Enviar <PaperPlaneRight size={20} weight="regular" color="#fff" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </StyledSection5>
    </>
  );
};

export default Section5;
