import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { CgMenu, CgClose } from "react-icons/cg";

export default function Header({toggleCart, windowWidth}) {

  const { cart } = useContext(CartContext);
  let itemsNumb = cart.items.reduce((accum, item) => accum + item.number, 0);
  if (itemsNumb > 99) itemsNumb = '99+';
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(prevIsMobileMenuOpen => !prevIsMobileMenuOpen);
  }

  let menu;
  if (windowWidth > 920) {
    menu = <Menu>
      <li><Link to={"/shopping-cart/"}>Home</Link></li>
      <li><Link to={"/shopping-cart/shop"}>Shop</Link></li>
      <li><Link>Contact</Link></li>
      <li>
        <FaShoppingCart size={28} onClick={toggleCart} />
        {itemsNumb ? <NumberNotification>{itemsNumb}</NumberNotification> : null}
      </li>
    </Menu>
  /* } else if (isMobileMenuOpen) {
    menu = <Menu>
      <li>
        <CgClose onClick={toggleMenu} />  
      </li>
    </Menu> */
  } else {
    menu = <Menu>
      <li>
        <FaShoppingCart size={28} onClick={toggleCart} />
        {itemsNumb ? <NumberNotification>{itemsNumb}</NumberNotification> : null}
      </li>
      <li>
        <CgMenu size={28} onClick={toggleMenu} />
      </li>
    </Menu>
  }


  return (
    <NavBar>
      <Link to={"/shopping-cart/"}>
        <Icon>Magic Store</Icon>
      </Link>
      {menu}
      {isMobileMenuOpen && 
        <FloatingMenu>
          <CgClose onClick={toggleMenu} />  
          <li><Link to={"/shopping-cart/"}>Home</Link></li>
          <li><Link to={"/shopping-cart/shop"}>Shop</Link></li>
          <li><Link>Contact</Link></li>
        </FloatingMenu>}
    </NavBar>
  )
}

const NavBar = styled.nav`
  padding: 0 5rem;
  height: 10vh;
  width: 100%;
  font-size: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--grey-op70);
  position: absolute;
  top: 0;

  @media only screen and (max-width: 920px) {
    padding: 0 1rem;
  }

  a {
    text-decoration: none;
  }
`;

const Icon = styled.h1`
  font-size: 3rem;
  padding: 1rem;
  text-decoration: none;
  color: black;

  @media only screen and (max-width: 920px) {
    font-size: 2rem;
  }
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

const FloatingMenu = styled.ul`
  position: absolute;
  top: 3vh;
  right: 1rem;
  list-style: none;
  font-size: 2rem;
  background-color: var(--op90);
  border-radius: 7px;
  z-index: 2;
  
  a {
    color: black;
    text-decoration: none;
  } 

  & > li {
    margin: 2rem 4rem;
  }

  & svg {
    position: absolute;
    right: 1rem;
    top: 1rem;
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
  text-shadow: 1px 1px 1px black;
`;