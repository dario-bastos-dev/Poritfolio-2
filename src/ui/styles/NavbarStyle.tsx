import styled from "styled-components";

const NavbarStyle = styled.nav`
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.blue3};
  width: 1280px;
  padding: 20px;
  border-radius: 50px;
  position: fixed;
  z-index: 2;
  top: 10px;
  display: flex;
  justify-content: space-between;
  box-shadow: 20px 20px 20px ${({ theme }) => theme.shadows.shadowWhite3};
  img {
    width: 10rem;
  }
  ul {
    display: flex;
    align-items: center;
    margin: 0 20px 0 0;
    li.btn {
      padding: 8px 10px;
      margin: 0 0 0 35px;
      width: 100px;
      text-align: center;
      border-radius: 5px;
      background-color: transparent;
      box-shadow: -10px -10px 10px ${({ theme }) => theme.shadows.shadowBlack3},
        10px 10px 10px ${({ theme }) => theme.shadows.shadowWhite3};
      a {
        color: ${({ theme }) => theme.colors.textWhite};
      }
      &:active {
        color: ${({ theme }) => theme.colors.gray};
        box-shadow: inset 10px 10px 10px
            ${({ theme }) => theme.shadows.shadowBlack3},
          inset -10px -10px 10px ${({ theme }) => theme.shadows.shadowWhite3};
      }
      &:hover {
        border-bottom: none;
      }
    }
    li {
      margin: 0 10px;
      font-family: ${({ theme }) => theme.font.openSans}, sans-serif;

      &:hover {
        border-bottom: 2px solid ${({ theme }) => theme.colors.blue1};
      }
      a {
        font-size: ${({ theme }) => theme.fontSize.small};
        color: ${({ theme }) => theme.colors.textWhite};
      }
    }
  }
`;

export default NavbarStyle;
