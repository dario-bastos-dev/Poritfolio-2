import styled from "styled-components";

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
  clip-path: polygon(0 0, 100% 0%, 100% 100%, 0 98%);
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
