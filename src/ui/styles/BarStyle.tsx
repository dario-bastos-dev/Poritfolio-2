import styled from "styled-components";

const StyledBar = styled.div`
  width: 1240px;
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: auto;
  background-color: ${({ theme }) => theme.colors.blue2};
  position: relative;
  bottom: 110px;
  margin: 0 auto;
  border-radius: 8px;
  div {
    color: ${({ theme }) => theme.colors.textWhite};
    font-family: ${({ theme }) => theme.font.ubunto};
    font-weight: bold;
    font-size: ${({ theme }) => theme.fontSize.title};
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;
    span {
      width: 100px;
      margin: 0 0 0 8px;
      font-size: ${({ theme }) => theme.fontSize.text};
      color: ${({ theme }) => theme.colors.blue1};
      opacity: 62%;
      text-transform: uppercase;
    }
  }
`;

export default StyledBar;
