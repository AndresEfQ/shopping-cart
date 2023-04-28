import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { CgAddR, CgRemoveR } from "react-icons/cg"
import styled from "styled-components";

export default function Card({id, card}) {

  const [itemsNumb, setItemsNumb] = useState(0);
  const { cart, setCart } = useContext(CartContext);

  const price = {
    Common: 0.5,
    Uncommon: 1.2,
    Rare: 3,
  }

  const addItem = () => {
    setItemsNumb(prevItemsNum => prevItemsNum < 1 ? 1 : prevItemsNum + 1);
  }

  const removeItem = () => {
    setItemsNumb(prevItemsNum => prevItemsNum < 1 ? 0 : prevItemsNum - 1);
  }

  const handleManualInput = (e) => {
    setItemsNumb(parseInt(e.target.value) || 0);
  }

  const handleAddToCart = (e, itemsNumb) => {
    console.log(e)
    if (!cart.items.find(item => item.name === e.target.dataset.name)) {
      setCart(prevCart => ({
        items: [...prevCart.items, {
          name: e.target.dataset.name, 
          img: e.target.dataset.img,
          number: itemsNumb,
          price: e.target.dataset.price,
        }]
      }))
    } else {
      setCart(prevCart => ({
        items: prevCart.items.map(item => {
          if (item.name === e.target.dataset.name) {
            return ({...item, number: item.number + itemsNumb});
          } else {
            return item;
          }
        })
      }))
    }
    setItemsNumb(0);
    console.log(cart);
  }

  return (
    <CardDiv>
      <img src={card.imageUrl || 'https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=5716299&type=card'} alt={card.name} />
      <ul>
        <li>
          <h3>{card.name}</h3>
        </li>
        <li>
          <p>{new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(price[card.rarity])}</p>
        </li>
      </ul>
      <div>
        <CgRemoveR size={25} onClick={removeItem} data-testid="remove-card" />
        <input value={itemsNumb} onChange={handleManualInput} />
        <CgAddR size={25} onClick={addItem} data-testid="add-card" />
          <button
            onClick={(e) => handleAddToCart(e, itemsNumb)}
            data-name={card.name}
            data-img={card.imageUrl}
            data-price={price[card.rarity]}
          >Add</button>
      </div>
    </CardDiv>
  )
}

const CardDiv = styled.div`
  padding: 0.5rem;
  background-color: var(--op80);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  & > img {
    width: 80%;
  }

  & ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  & svg {
    position: relative;
    top: 0;
    left: 0;
    cursor: pointer;
  }

  & svg:active {
    color: var(--main);
    transform: scale(0.95);
  }

  & > div {
    display: flex;
  }

  & input {
    width: 2rem;
    margin: 0 0.5rem;
    text-align: center;
    border-radius: 3px;
    border: none;
  }

  & button {
    background-color: var(--main);
    background: linear-gradient(13deg, var(--main) 0%, var(--secondary) 100%);
    color: white;
    font-weight: bold;
    border: none;
    border-radius: 7px;
    padding: 4px 8px;
    margin-left: 1rem;
    cursor: pointer;
  }

  & button:active {
    color: var(--grey);
    transform: scale(0.95);
  }
`;
