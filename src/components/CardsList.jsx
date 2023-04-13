import styled from "styled-components";

export default function CardsList(props) {
  return (
    <>
      {props.cards ? props.cards.map(card => <div><img src={card.imageUrl} alt={card.name}></img></div>) : <span>...loading</span>}
    </>
  )
}