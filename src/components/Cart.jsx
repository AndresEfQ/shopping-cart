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
      {cart.items.length ? 
        cart.items.map(item => 
          <CartItem onClick={(e) => e.stopPropagation()} key={item.name}>
            <img src={item.img} alt={item.name} />
            <InfoDiv>
              <h3>{item.name}</h3>
              <ul>
                <li>
                  <span>Cards Ammount:</span>
                  <span data-testid="cards-number">{item.number}</span>
                </li>
                <li>
                  <span>Total:</span>
                  <span data-testid="cards-price">
                    {new Intl.NumberFormat('en-US', {
                      style: 'currency', 
                      currency: 'USD'
                      }).format(item.price * item.number)
                    }
                  </span>
                </li>
              </ul>
            </InfoDiv>
            <button 
              onClick={removeFromCart} 
              data-name={item.name} 
              data-testid="remove-from-cart"
            >
              <FaTrashAlt color="var(--grey)" />
            </button>
          </CartItem>) : 
        <CartItem onClick={(e) => e.stopPropagation()}>
          <em>There are no items in the cart</em>
        </CartItem>
      }
      <hr />
      <CartItem onClick={(e) => e.stopPropagation()}>
        <span>Subtotal</span>
        <span data-testid="subtotal">
          {new Intl.NumberFormat('en-US', {
            style: 'currency', 
            currency: 'USD'
            }).format(subtotal)
          }
        </span>
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

    @media only screen and (max-width: 490px) {
      width: 100%;
    }
  }
`;

const CartItem = styled.div`
  width: 20vw;
  background-color: var(--op80);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 2rem;

  @media only screen and (max-width: 490px) {
    width: 100%;
    padding: 0.5rem;
  }

  & img {
    width: 15%;

    @media only screen and (max-width: 490px) {
      width: 25%;
    }
  }

  & svg {
    pointer-events: none;

    @media only screen and (max-width: 490px) {
      transform: scale(2);
    }
  }

  & button {
    border: none;
    background: none;
    cursor: pointer;

    @media only screen and (max-width: 490px) {
      width: 2rem;
      height: 2rem;
    }
  }

  & button:active {
    transform: scale(0.95);
  }
`;

const InfoDiv = styled.div`
  width: 10vw;

  @media only screen and (max-width: 490px) {
    width: 50vw;
  }

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

