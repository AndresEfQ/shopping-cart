import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa"

export default function Header({toggleCart}) {

  const { cart } = useContext(CartContext);
  const itemsNumb = cart.items.reduce((accum, item) => accum + item.number, 0);

  return (
    <NavBar>
      <Link to={"/"}>
        <Icon>Magic Store</Icon>
      </Link>
      <Menu>
        <li><Link to={"/"}>Home</Link></li>
        <li><Link to={"/shop"}>Shop</Link></li>
        <li><Link>Contact</Link></li>
        <li>
          <FaShoppingCart onClick={toggleCart} />
          {itemsNumb ? <NumberNotification>{itemsNumb}</NumberNotification> : null}
        </li>
      </Menu>
    </NavBar>
  )
}

const NavBar = styled.nav`
  padding: 0 5rem;
  height: 12vh;
  font-size: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--grey-op70);

  a {
    text-decoration: none;
  }
`;

const Icon = styled.h1`
  font-size: 3rem;
  padding: 1rem;
  text-decoration: none;
  color: black;
`;

const Menu = styled.ul`
  list-style: none;
  display: flex;
  gap: 0rem;
  z-index: 2;

  & > li {
    padding: 1rem;
    position: relative;
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

const NumberNotification = styled.div`
  background-color: var(--main);
  height: 1.3rem;
  width: 1.3rem;
  border-radius: 50%;
  color: white;
  font-size: 0.8rem;
  font-weight: bold;
  position: absolute;
  right: 0.2rem;
  bottom: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;