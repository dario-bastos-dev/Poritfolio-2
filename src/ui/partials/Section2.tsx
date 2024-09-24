import { ChartBar, Gear, Laptop, Storefront } from "@phosphor-icons/react";
import { StyledButton2, StyledSection2 } from "../styles/SectionStyles";

const Section2 = () => {
  return (
    <StyledSection2>
      <div className="container">
        <div className="ttitle-subtitle">
          <h2>Soluções inteligentes</h2>
          <p>Para impulsionar seu negócio</p>
        </div>
        <div className="servicos">
          <div>
            <div>
              <Storefront size={69} weight="bold" color="#fff" />
              <p>E-comerces</p>
            </div>
          </div>
          <div>
            <div>
              <ChartBar size={68} weight="bold" color="#fff" />
              <p>Sistema de ERP</p>
            </div>
          </div>
          <div>
            <div>
              <Gear size={68} weight="bold" color="#fff" />
              <p>Automaçôes e Chatbots</p>
            </div>
          </div>
          <div>
            <div>
              <Laptop size={68} weight="bold" color="#fff" />
              <p>Landing Pages e Sites Institucionais</p>
            </div>
          </div>
        </div>
        <div className="button">
          <StyledButton2 >Quero uma solução</StyledButton2>
        </div>
      </div>
    </StyledSection2>
  );
};

export default Section2;
