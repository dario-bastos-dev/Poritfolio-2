import React from "react";
import { StyledButton, StyledSection4 } from "../styles/SectionStyles";
import { Gear, Laptop, Storefront } from "@phosphor-icons/react";

const Section4: React.FunctionComponent = () => {
  return (
    <StyledSection4>
      <div className="container">
        <h2>Projetos feitos</h2>
        <div className="projects">
          <div className="project">
            <div>
              <Laptop size={68} weight="regular" color="#fff" />
              <p className="title">Naturefork</p>
              <p className="desc">
                Landing page criada para a área de nutrção, focada em atrair
                mais clientes.
              </p>
              <StyledButton
                href="https://site-nutricionista-mauve.vercel.app/"
                target="_blank"
              >
                Ver mais
              </StyledButton>
            </div>
          </div>
          <div className="project">
            <div>
              <Storefront size={69} weight="regular" color="#fff" />
              <p className="title">Click Buy</p>
              <p className="desc">
                E-comercer completo, que te permite controlar e todo o seu
                processo de venda, estoque, dentre outros, dentro de uma única
                plataforma.
              </p>
              <p className="btn">Em desenvolvimento</p>
            </div>
          </div>
          <div className="project">
            <div>
            <Gear size={68} weight="regular" color="#fff" />
              <p className="title">Automação de atendimento</p>
              <p className="desc">
                Criação de um chatbot para realizar a interação inicial dos
                clientes, qualificando o cliente e uma automação para adicionar
                no seu CRM após a qualificação.
              </p>
            </div>
          </div>
        </div>
      </div>
    </StyledSection4>
  );
};

export default Section4;
