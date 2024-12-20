import styled from "styled-components";

// Modelo de botão
export const StyledButton = styled.a`
  padding: 25px 15px;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.textWhite};
  font-family: ${({ theme }) => theme.font.openSans}, sans-serif;
  font-size: ${({ theme }) => theme.fontSize.button};
  font-weight: bold;
  border-radius: 8px;
  box-shadow: 20px 20px 30px ${({ theme }) => theme.shadows.shadow1},
    -20px -20px 30px ${({ theme }) => theme.shadows.shadowWhite4};
  &:active {
    color: ${({ theme }) => theme.colors.gray};
    box-shadow: inset 10px 10px 30px ${({ theme }) => theme.shadows.shadow1},
      inset -10px -10px 30px ${({ theme }) => theme.shadows.shadowWhite4};
  }
`;

export const StyledButton2 = styled(StyledButton)`
  box-shadow: 20px 20px 30px ${({ theme }) => theme.shadows.shadowBlack3},
    -20px -20px 30px ${({ theme }) => theme.shadows.shadowWhite3};

  &:active {
    box-shadow: inset 10px 10px 30px
        ${({ theme }) => theme.shadows.shadowBlack3},
      inset -10px -10px 30px ${({ theme }) => theme.shadows.shadowWhite3};
  }
`;

// Modelo de seção - Criar um no final analisando oq se repete em todas as outras seções

// Seções
export const StyledSection1 = styled.section`
  background-image: url("src/assets/bg.jpg");
  background-repeat: no-repeat;
  background-size: 100vw 90vh;
  .container {
    width: 100vw;
    height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
    div {
      color: ${({ theme }) => theme.colors.textWhite};
      text-align: center;

      h1 {
        width: 1000px;
        margin: 0 0 94px 0;
        font-family: ${({ theme }) => theme.font.ubunto}, system-ui;
        font-size: ${({ theme }) => theme.fontSize.title};
        text-transform: uppercase;
        letter-spacing: 5px;
        line-height: 65px;

        span {
          color: ${({ theme }) => theme.colors.blue1};
        }
      }
    }
  }
`;

export const StyledSection2 = styled.section`
  background-color: ${({ theme }) => theme.colors.blue3};
  margin-top: -120px;
  padding: 0 0 50px 0;
  height: 135vh;

  .container {
    padding: 60px 0 0 0;
    color: ${({ theme }) => theme.colors.textWhite};
    display: grid;
    grid-template-rows: 20vh 90vh 10vh;
    .ttitle-subtitle {
      text-align: center;
      text-transform: uppercase;
      letter-spacing: 10px;
      h2 {
        font-family: ${({ theme }) => theme.font.ubunto};
        font-weight: bold;
        font-size: ${({ theme }) => theme.fontSize.title};
        margin: 0 0 -15px 0;
      }
      p {
        font-family: ${({ theme }) => theme.font.openSans};
        font-weight: normal;
        font-size: ${({ theme }) => theme.fontSize.subtitle};
      }
    }
    .servicos {
      width: 50rem;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(2, 1fr);
      grid-gap: 100px;
      justify-self: center;
      & > div {
        width: 18rem;
        height: 18rem;
        padding: 20px;
        box-shadow: -20px 20px 60px ${({ theme }) => theme.shadows.shadowBlack3},
          20px -20px 60px ${({ theme }) => theme.shadows.shadowWhite3};
        border-radius: 20px;
        & > div {
          width: 100%;
          height: 100%;
          display: grid;
          justify-items: center;
          align-items: center;
          box-shadow: inset 20px -20px 60px ${({ theme }) => theme.shadows.shadowWhite3},
            inset -20px 20px 60px ${({ theme }) => theme.shadows.shadowBlack3};
          border-radius: 15px;
          & > p {
            width: 220px;
            font-family: ${({ theme }) => theme.font.openSans};
            font-size: ${({ theme }) => theme.fontSize.subtitle};
            font-weight: bold;
            text-align: center;
          }
          & > svg {
            margin: auto 0 0 0;
          }
        }
      }
    }
    & > .button {
      margin: 70px 0 0 0;
      justify-self: center;
    }
  }
`;

export const StyledSection3 = styled.section`
  background-color: ${({ theme }) => theme.colors.blue4};
  margin-top: -28px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  clip-path: polygon(0 0, 100% 3%, 100% 100%, 0 100%);

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${({ theme }) => theme.colors.textWhite};
    text-align: center;

    a {
      margin: 60px 0 0 0;
    }
  }

  div {
    margin: 60px 0 0 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    .img {
      margin: 0 40px 0 0;
      display: flex;
      justify-content: end;
      img {
        width: 400px;
        height: 400px;
        border-radius: 37px;
        box-shadow: -20px 20px 60px ${({ theme }) => theme.shadows.shadow1},
          20px -20px 60px ${({ theme }) => theme.shadows.shadowWhite4};
      }
    }

    .text {
      margin: 0 0 0 40px;
      display: flex;
      flex-direction: column;
      text-align: start;

      h4 {
        margin: 0 0 20px 0;
        color: ${({ theme }) => theme.colors.blue1};
      }
    }
  }
`;

export const StyledSection4 = styled.section`
  background-color: ${({ theme }) => theme.colors.blue3};
  margin-top: -48px;
  height: 90vh;
  clip-path: polygon(0 0, 100% 3%, 100% 100%, 0 100%);

  .container {
    padding: 120px 0;
    text-align: center;

    .projects {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 40px;
      margin: 60px 0 0 0;

      .project {
        width: 18rem;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 20px;
        box-shadow: -20px 20px 60px ${({ theme }) => theme.shadows.shadowBlack3},
          20px -20px 60px ${({ theme }) => theme.shadows.shadowWhite3};
        border-radius: 20px;

        div {
          display: flex;
          flex-direction: column;
          align-items: center;

          .title {
            font-family: ${({ theme }) => theme.font.ubunto};
            font-weight: bold;
            font-size: ${({ theme }) => theme.fontSize.subtitle};
          }
          .desc {
            font-size: ${({ theme }) => theme.fontSize.text};
          }

          p.btn {
            color: #c1c1c1;
            cursor: default;
          }

          a {
            margin: 2rem 0;
            padding: 10px 80px;
            border-radius: 30px;
            box-shadow: 10px 10px 20px ${({ theme }) => theme.shadows.shadow1},
              -10px -10px 20px ${({ theme }) => theme.shadows.shadowWhite4};
            font-size: ${({ theme }) => theme.fontSize.subtitle};
            &:active {
              box-shadow: inset 10px 10px 20px
                  ${({ theme }) => theme.shadows.shadow1},
                inset -10px -10px 20px
                  ${({ theme }) => theme.shadows.shadowWhite4};
            }
          }
        }
      }
    }
  }
`;

export const StyledSection5 = styled.section`
  background-color: ${({ theme }) => theme.colors.blue4};
  margin-top: -48px;
  height: 120vh;
  clip-path: polygon(0 0, 100% 3%, 100% 100%, 0 100%);

  .container {
    padding: 100px 0;
    text-align: center;

    .subtitle {
      margin: 0 0 50px 0;
      font-size: ${({ theme }) => theme.fontSize.button};
      letter-spacing: 3px;
    }

    .principal {
      width: 35rem;
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      justify-self: center;

      div.form {
        padding: 30px;
        margin: auto;
        background-color: ${({ theme }) => theme.colors.blue4};
        border-radius: 10px;
        box-shadow: -25px 25px 60px ${({ theme }) => theme.shadows.shadow1},
          25px -25px 60px ${({ theme }) => theme.shadows.shadowWhite4};

        form {
          &,
          label {
            display: flex;
            flex-direction: column;
            font-family: ${({ theme }) => theme.font.openSans};
          }
          
          label {
            gap: 8px;
          }

          label.checkbox {
            flex-direction: row;
            gap: 10px;
          }
          
          gap: 30px;
          text-align: left;

          input:not(.check), textarea {
            width: 30.75rem;
            padding: 6px;
            border-radius: 5px;
            box-shadow: inset -7px 7px 10px ${({ theme }) => theme.colors.gray};
          }

          select {
            width: 31.5rem;
            padding: 5px;
            border-radius: 5px;
            box-shadow: inset -7px 7px 10px ${({ theme }) => theme.colors.gray};
          }

          input:not(.check) {
            height: 1.5rem;
          }

          .input::placeholder {
            font-weight: 600;
          }

          .btn {
            margin-top: 40px;
            padding: 8px;
            background-color:${({ theme }) => theme.colors.blue1};
            border: none;
            border-radius: 5px;
            color: ${({ theme }) => theme.colors.textWhite};
            font-size: ${({ theme }) => theme.fontSize.text};
            display: flex;
            justify-content: center;
            align-items: center;

            svg {
              margin-left: 5px;
            }
          }
        }
      }
    }
  }
`;
