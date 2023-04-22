import styled from "styled-components";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Cart from "../components/Cart";
import { useState } from "react";

export default function Root({itemsNumb, cart}) {

  const [cartIsVisible, setCartIsVisible] = useState(false);

  const toggleCart = () => {
    setCartIsVisible((prevCartIsVisible => !prevCartIsVisible));
  }

  return (
    <>
      <Background>
        <Header itemsNumb={itemsNumb} toggleCart={toggleCart} />
        <div>
          <Outlet />
          {cartIsVisible && <Cart cart={cart} />}
        </div>
        <Footer />
      </Background>
    </>
  )
}

const Background = styled.div`
  background-image: url("https://g.foolcdn.com/editorial/images/519804/hasbro-magic-gaming-source-mtg.jpg");
  height: 100vh;

  & > div {
    height: 88vh;
    display: flex;
  }
`
