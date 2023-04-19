import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa"

export default function Header() {
  return (
    <NavBar>
      <Link to={"/"}>
        <Icon>Magic Store</Icon>
      </Link>
      <Menu>
        <li><Link to={"/"}>Home</Link></li>
        <li><Link to={"/shop"}>Shop</Link></li>
        <li><Link>Contact</Link></li>
        <li><Link><FaShoppingCart /></Link></li>
      </Menu>
    </NavBar>
  )
}

const NavBar = styled.nav`
  padding: 0 6rem;
  height: 12vh;
  font-size: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(200, 200, 200, 0.7);

  a {
    text-decoration: none;
  }
`;

const Icon = styled.h1`
  font-size: 3rem;
  text-decoration: none;
  color: black;
`;

const Menu = styled.ul`
  list-style: none;
  display: flex;
  gap: 2rem;
  z-index: 2;

  a {
    color: inherit;
    text-decoration: none;
  }
`;