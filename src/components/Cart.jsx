import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import styled from "styled-components";
import { FaTrashAlt } from "react-icons/fa";

export default function Cart() {

  const {cart, setCart} = useContext(CartContext);

  return (
    <CartDiv>
      {cart.items.map(item => <CartItem>
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
        <FaTrashAlt color="var(--grey)" />
      </CartItem>)}
      
    </CartDiv>
  )
}

const CartDiv = styled.div`
  position: absolute;
  right: 0;
  width: 100%;
  height: 88vh;
  background-color: var(--secondary-op60);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1rem;
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

