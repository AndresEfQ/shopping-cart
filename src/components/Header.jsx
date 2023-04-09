import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa"

export default function Header() {
  return (
    <NavBar>
      <Icon>Magic Store</Icon>
      <Menu>
        <li><Link>Home</Link></li>
        <li><Link>Shop</Link></li>
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
`;

const Icon = styled.h1`
  font-size: 3rem;
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