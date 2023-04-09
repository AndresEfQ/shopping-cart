import styled from "styled-components";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Root() {
  return (
    <>
      <Background>
        <Header />
        <Outlet />
        <Footer />
      </Background>
    </>
  )
}

const Background = styled.div`
  background-image: url("https://g.foolcdn.com/editorial/images/519804/hasbro-magic-gaming-source-mtg.jpg");
  height: 100vh;
`
