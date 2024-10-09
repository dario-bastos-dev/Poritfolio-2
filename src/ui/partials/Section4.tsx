import React from "react";
import { StyledButton, StyledSection4 } from "../styles/SectionStyles";

const Section4: React.FunctionComponent = () => {
  return (
    <StyledSection4>
      <div className="container">
        <h2>Projetos feitos</h2>
        <div className="projects">
          <div className="project">
            <div>
              <p>Naturefork</p>
              <StyledButton href="https://site-nutricionista-mauve.vercel.app/" target="_blank">Ver mais</StyledButton>
            </div>
          </div>
          <div className="project">
            <div>
              <p>Blog</p>
              <StyledButton href="https://andrezza.firmadeadvocacia.adv.br/" target="_blank">Ver mais</StyledButton>
            </div>
          </div>
          <div className="project">
            <div>
              <p>Job Finder</p>
              <StyledButton href="https://job-finder-bwun.onrender.com" target="_blank">Ver mais</StyledButton>
            </div>
          </div>
        </div>
      </div>
    </StyledSection4>
  );
};

export default Section4;
