import { StyledButton, StyledSection3 } from "../styles/SectionStyles";
import profissional from "../../assets/Profissional.jpg";

const Section3 = () => {
  return (
    <StyledSection3>
      <div className="container">
        <h2>Desenvolvedor</h2>
        <div>
          <div className="img">
            <img src={profissional} alt="Imagem do programador responsável" />
          </div>
          <div className="text">
            <h3>Dário Bastos</h3>
            <h4>Desenvolvedor</h4>
            <p>
              Olá! Sou Dário, um programador apaixonado por tecnologia e
              inovação, com mais de dois anos de experiência no desenvolvimento
              de soluções digitais. Aos 19 anos, já tive a oportunidade de
              trabalhar em duas agências de marketing, onde desenvolvi projetos
              que alavancaram a presença online de seus clientes. Minha
              trajetória profissional é marcada pela busca constante de
              aprendizado e pela capacidade de resolver problemas de forma
              criativa e eficaz. Essa combinação me permite oferecer serviços
              que não apenas atendem, mas superam as expectativas dos meus
              clientes.
            </p>
          </div>
        </div>
        <StyledButton href="" >Solicitar Orçamento</StyledButton>
      </div>
    </StyledSection3>
  );
};

export default Section3;
