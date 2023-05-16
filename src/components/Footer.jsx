import { FaGithub } from "react-icons/fa";
import styled from "styled-components";

export default function Footer() {
  return (
    <Container>
      Copyright © <Anchor href="https://github.com/AndresEfQ/shopping-cart">AndresEfQ 2023 <FaGithub /></Anchor>
    </Container>
  )
}

const Container = styled.footer`
  font-size: 1.5rem;
  width: 100%;
  height: 6vh;
  position: absolute;
  bottom: 0;
  color: rgb(255, 255, 255);
  padding: 0.4rem;
  text-align: center;
  text-shadow: 0 0 10px rgb(0, 0, 0);
  background: var(--secondary-op90);

  @media only screen and (max-width: 360px) {
    font-size: 1.2rem;
  }
`;

const Anchor = styled.a`
  text-decoration: none;
  color: rgb(255, 255, 255);

  &:hover {
    color: rgb(100,100,100);
  }
`;
