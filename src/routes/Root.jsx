import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Cart from "../components/Cart";
import styled from "styled-components";

export default function Root({windowWidth}) {

  const [cartIsVisible, setCartIsVisible] = useState(false);

  const toggleCart = (e) => {
    e.stopPropagation();
    setCartIsVisible((prevCartIsVisible => !prevCartIsVisible));
  }

  return (
    <Background>
      <Header toggleCart={toggleCart} windowWidth={windowWidth} />
      <div>
        <Outlet />
        {cartIsVisible && <Cart toggleCart={toggleCart} />}
      </div>
      <Footer />
    </Background>
  )
}

const Background = styled.div`
  background: no-repeat center url("https://g.foolcdn.com/editorial/images/519804/hasbro-magic-gaming-source-mtg.jpg");

  & > div {
    margin-top: 10vh;
    height: 90vh;
    width: 100%;
    display: flex;
  }
`
