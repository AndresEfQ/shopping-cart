import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Container>
      <Cell>
        <div>
          <p>The place to find all your MTG cards</p>
          <Link to={"/shopping-cart/shop"}>
            <button>Shop now</button>
          </Link>
        </div>
      </Cell>
    </Container>
  )
}

const Container = styled.div`
  height: 90%;
  margin-left: 6rem;
  font-size: 4rem;
  color: white;
  text-shadow: 0 0 10px black;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media only screen and (max-width: 400px) {
    font-size: 3rem;
    margin: 0;
  }

  & p {
    text-align: center;
  }

  button {
    margin-top: 6vh;
    font-size: 2rem;
    padding: 1rem 6rem;
    border-radius: 20px;
    border: none;
    outline: none;
    cursor: pointer;
    font-weight: 600;
  }
`
const Cell = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media only screen and (max-width: 490px) {
    grid-template-columns: 1fr;
  }

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;

    @media only screen and (max-width: 490px) {
    height: 45vh;
    justify-content: space-between;
  }
  }
`;
