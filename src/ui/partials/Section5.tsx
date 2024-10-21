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
                  <input type="text" placeholder="Digite seu nome:" name="name" />
                </label>
                <label htmlFor="phone">
                  WhatsApp:
                  <input type="text" placeholder="Digite seu número:" name="phone" />
                </label>
                <label htmlFor="email">
                  E-mail:
                  <input type="text" placeholder="Digite seu e-mail:" name="email" />
                </label>
                <label htmlFor="soluction">
                  Selecione qual solução voce deseja:
                  <select name="soluction" id="">
                    <option value="E-comerce" selected>E-comerce</option>
                    <option value="ERP">ERP</option>
                    <option value="Automação">Automação</option>
                    <option value="Site">Site</option>
                  </select>
                </label>
                <label htmlFor="desc">
                  Descreva o projeto:
                  <textarea name="desc" placeholder="Fale mais sobre o que deseja criar"></textarea>
                </label>
                <label htmlFor="msg" className="checkbox">
                <input type="checkbox" name="msg" value='Aceito' className="check" />
                Aceito receber mensagens pelo e-mail e whatsapp
                </label>
              </form>
            </div>
          </div>
        </div>
      </StyledSection5>
    </>
  );
};

export default Section5;
