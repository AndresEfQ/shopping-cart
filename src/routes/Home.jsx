import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Container>
      <Cell>
        <div>
          <p>The place to find all your MTG cards requirements</p>
          <Link to={"/shop"}>
            <button>Shop now</button>
          </Link>
        </div>
      </Cell>
    </Container>
  )
}

const Container = styled.div`
  height: 80%;
  margin-left: 6rem;
  font-size: 4rem;
  color: rgb(255, 255, 255);
  text-shadow: 0 0 10px rgb(0, 0, 0);
  display: flex;
  flex-direction: column;
  justify-content: center;

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

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
