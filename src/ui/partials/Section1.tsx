import {StyledButton, StyledSection1} from "../styles/SectionStyles";

const Section1 = () => {
  return (
      <StyledSection1 id="section-1">
        <div className="container">
          <div>
            <h1>
              Transforme Seu Negócio com
              <span> Soluções Digitais Sob Medida</span>
            </h1>
            <StyledButton href="#">Solicitar Orçamento</StyledButton>
          </div>
        </div>
      </StyledSection1>
  );
};

export default Section1;
