import styled from "styled-components";
import Card from "./Card";

export default function CardsList({cards}) {

  return (
    <CardList>
      {cards.map(card => <Card key={card.id} card={card} />)}
    </CardList>
  )
}

const CardList = styled.div`
  height: 80vh;
  width: 82vw;
  margin: 1rem;
  align-self: flex-start;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  column-gap: 1rem;
  row-gap: 1.5rem;
  overflow-y: scroll;

  @media only screen and (max-width: 490px) {
    grid-template-columns: repeat(2, 1fr);
    width: 100vw;
    margin: 0;
    padding: 1rem;
    padding-bottom: 3rem;
  }

  div, img {
    border-radius: 10px;
  }
`