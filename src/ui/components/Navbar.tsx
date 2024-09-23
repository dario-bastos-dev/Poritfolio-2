import NavbarStyle from "../styles/NavbarStyle";
import logo from "../../assets/logo-completa.png";

const Navbar = () => {

  return (
    <div className="container">
      <NavbarStyle>
        <img src={logo} alt="Logo" />
        <ul>
          <li>
            <a href="#">Início</a>
          </li>
          <li>
            <a href="#">Soluções</a>
          </li>
          <li>
            <a href="#">Sobre</a>
          </li>
          <li>
            <a href="#">Trabalhos</a>
          </li>
          <li className="btn">
            <a href="#">Contato</a>
          </li>
        </ul>
      </NavbarStyle>
    </div>
  );
};

export default Navbar;
