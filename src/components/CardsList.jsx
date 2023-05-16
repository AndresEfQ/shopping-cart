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
  height: 77vh;
  width: 78vw;
  margin: 1rem;
  align-self: flex-start;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  column-gap: 1rem;
  row-gap: 1.5rem;
  overflow-y: auto;
  
  @media only screen and (max-width: 920px) {
    grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
    width: 100vw;
    margin: 0;
    padding: 1rem;
  }

  @media only screen and (max-width: 360px) {
    padding: 1rem 2.5rem;
  }

  div, img {
    border-radius: 10px;
  }
`