import CartWidget from "./CartWidget";
import "./navbar.css";
import Flex from "../Flex/Flex";

function Navbar(props) {
  return (
    <nav className="nav-cont">
      <Flex>
        <div className="cont-logo">
          <img className="logoNav" src="/img/crow-logo.png" alt="logo"></img>
        </div>
        <ul className="ul-cont">
          <li>
            <a href="">INICIO</a>
          </li>
          <li>
            <a href="">PRODUCTOS</a>
          </li>
          <li>
            <a href="">CONTACTO</a>
          </li>
        </ul>
        <CartWidget />
      </Flex>
    </nav>
  );
}

export default Navbar;
