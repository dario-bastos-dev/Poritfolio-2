import styled from "styled-components";

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
      a {
        padding: 25px 10px;
        background-color: ${({ theme }) => theme.colors.textWhite};
        color: ${({ theme }) => theme.colors.blue3};
        font-family: ${({ theme }) => theme.font.openSans}, sans-serif;
        font-size: ${({ theme }) => theme.fontSize.button};
        font-weight: bold;
        border-radius: 8px;
        box-shadow: 10px 10px 0px ${({ theme }) => theme.colors.blue3};
        &:active {
          box-shadow: none;
          position: relative;
          top: 10px;
          left: 10px;
        }
      }
    }
  }
`;

export const StyledSection2 = styled.section`
background-color: ${({ theme }) => theme.colors.blue3};
margin-top: -120px;
  .container {
    padding: 60px 0 0 0;
    color: ${({theme}) => theme.colors.textWhite};
    display: grid;
    grid-template-rows: 25vh 50vh 25vh;
    .ttitle-subtitle {
      text-align: center;
      text-transform: uppercase;
      letter-spacing: 10px;
      h2 {
        font-family: ${({theme}) => theme.font.ubunto};
        font-weight: bold;
        font-size: ${({theme}) => theme.fontSize.title};
        margin: 0 0 -15px 0;
      }
      p {
        font-family: ${({theme}) => theme.font.openSans};
        font-weight: normal;
        font-size: ${({theme}) => theme.fontSize.subtitle};
      }
      
    }
    .servicos {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(2, 1fr);
      grid-gap: auto;
    }
  }
`;
