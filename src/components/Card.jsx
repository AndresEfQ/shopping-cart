import { useState } from "react";
import { CgAddR, CgRemoveR } from "react-icons/cg"
import styled from "styled-components";

export default function Card(props) {

  const [itemsNumb, setItemsNumb] = useState(0);

  const addItem = () => {
    setItemsNumb(prevItemsNum => prevItemsNum + 1);
  }

  const removeItem = () => {
    setItemsNumb(prevItemsNum => prevItemsNum - 1);
  }

  const handleManualInput = (e) => {
    setItemsNumb(e.target.value);
  }

  return (
    <CardDiv>
      <img src={props.card.imageUrl || 'https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=5716299&type=card'} alt={props.card.name} />
      <div>
        <CgRemoveR size={25} onClick={removeItem} />
        <input value={itemsNumb} onChange={handleManualInput} />
        <CgAddR size={25} onClick={addItem} />
        <button 
          onClick={(e) => props.handleAddToCart(e,itemsNumb)}
          data-name={props.card.name}
          data-img={props.card.imageUrl}
        >Add to cart</button>
      </div>
    </CardDiv>
  )
}

const CardDiv = styled.div`
  padding: 0 0.5rem;
  background-color: rgba(255,255,255,0.5);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  & svg {
    position: relative;
    top: 0;
    left: 0;
    cursor: pointer;
  }

  & svg:active {
    color: rgb(207,5,179);
  }

  & > div {
    display: flex;
  }

  input {
    width: 2rem;
    margin: 0 0.5rem;
    text-align: center;
    border-radius: 3px;
    border: none;
  }

  button {
    background-color: rgb(207,5,179);
    background: linear-gradient(13deg, rgba(207,5,179,1) 0%, rgba(27,0,65,1) 100%);
    color: #fff;
    font-weight: bold;
    border: none;
    border-radius: 7px;
    padding: 4px 8px;
    margin-left: 1rem;
  }
`;
