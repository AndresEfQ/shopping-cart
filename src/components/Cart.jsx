import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import styled from "styled-components";
import { FaTrashAlt } from "react-icons/fa";

export default function Cart({toggleCart}) {

  const {cart, setCart} = useContext(CartContext);

  const subtotal = cart.items.reduce((current, item) => current + (item.price * item.number), 0)

  const removeFromCart = (e) => {

    setCart(prevCart => {
      const itemToRemove = prevCart.items.find(item => item.name === e.target.dataset.name)
      console.log(itemToRemove);
      if (itemToRemove.number === 1) {
        return ({
          items: prevCart.items.filter(item => item.name !== itemToRemove.name)
        })
      } else {
        return ({
          items: prevCart.items.map(item => {
            if (item.name === itemToRemove.name) {
              return {...item, number: item.number - 1}
            } else {
              return item;
            }
          })
        })
      }
    })
  }

  return (
    <CartDiv onClick={toggleCart}>
      {cart.items.length ? cart.items.map(item => <CartItem onClick={(e) => e.stopPropagation()} key={item.name}>
        <img src={item.img} alt={item.name} />
        <InfoDiv>
          <h3>{item.name}</h3>
          <ul>
            <li>
              <span>Cards Ammount:</span>
              <span>{item.number}</span>
            </li>
            <li>
              <span>Total:</span>
              <span>{new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(item.price * item.number)}</span>
            </li>
          </ul>
        </InfoDiv>
        <button onClick={removeFromCart} data-name={item.name}>
          <FaTrashAlt color="var(--grey)" />
        </button>
      </CartItem>) : <CartItem onClick={(e) => e.stopPropagation()}><em>There are no items in the cart</em></CartItem>}
      <hr />
      <CartItem onClick={(e) => e.stopPropagation()}>
        <span>Subtotal</span>
        <span>{new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(subtotal)}</span>
      </CartItem>
    </CartDiv>
  )
}

const CartDiv = styled.div`
  position: absolute;
  right: 0;
  width: 100%;
  height: 88vh;
  background-color: var(--secondary-op90);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1rem;

  & hr {
    width: 20vw;
  }
`;

const CartItem = styled.div`
  width: 20vw;
  background-color: var(--op80);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 2rem;

  & img {
    width: 15%;
  }

  & svg {
    pointer-events: none;
  }

  & button {
    border: none;
    background: none;
    cursor: pointer;
  }

  & button:active {
    transform: scale(0.95);
  }
`;

const InfoDiv = styled.div`
  width: 10vw;

  & h3 {
    border-bottom: 1px solid var(--grey);
  }
  
  & ul {
    list-style: none;
  }
  
  & li {
    display: flex;
    justify-content: space-between;
  }
`;

