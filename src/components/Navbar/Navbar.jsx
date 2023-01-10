import CartWidget from "./CartWidget";
import "./navbar.css";
import Flex from "../Flex/Flex";
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <nav className="nav-cont">
      <Flex>
        <div className="cont-logo">
          <Link to="/">
            <img className="logoNav" src="/img/crow-logo.png" alt="logo"></img>
          </Link>
        </div>
        <ul className="ul-cont">
          <li>
            <Link to="/cat/remera">REMERAS</Link>
          </li>
          <li>
            <Link to="/cat/pantalon">PANTALONES</Link>
          </li>
          <li>
            <Link to="/cat/top">TOPS</Link>
          </li>
        </ul>
        <Link to="/cart">
          <CartWidget />
        </Link>
      </Flex>
    </nav>
  );
}

export default Navbar;
