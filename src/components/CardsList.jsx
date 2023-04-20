import styled from "styled-components";
import Card from "./Card";

export default function CardsList(props) {

  return (
    <CardList>
      {props.cards.map(card => <Card id={card.id} card={card} handleAddToCart={props.handleAddToCart} />)}
    </CardList>
  )
}

const CardList = styled.div`
  height: 80vh;
  width: 85vw;
  margin: 1rem;
  align-self: flex-start;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  column-gap: 1rem;
  row-gap: 1.5rem;

  div, img {
    border-radius: 10px;
  }
`