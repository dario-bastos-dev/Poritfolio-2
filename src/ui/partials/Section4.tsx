import { StyledButton, StyledSection4 } from "../styles/SectionStyles";

const Section4 = () => {
  return (
    <StyledSection4>
      <div className="container">
        <h2>Projetos feitos</h2>
        <div className="projects">
          <div className="project pro-1">
            <div>
              <img src="" alt="" />
              <p>Projeto 1</p>
              <StyledButton>Ver mais</StyledButton>
            </div>
          </div>
          <div className="project pro-2">
            <div>
              <img src="" alt="" />
              <p>Projeto 2</p>
              <StyledButton>Ver mais</StyledButton>
            </div>
          </div>
          <div className="project pro-3">
            <div>
              <img src="" alt="" />
              <p>Projeto 3</p>
              <StyledButton>Ver mais</StyledButton>
            </div>
          </div>
        </div>
      </div>
    </StyledSection4>
  );
};

export default Section4;
