import styled from "styled-components";


export default function Cart({cart}) {
  return (
    <CartDiv>
      {cart.items.map(item => <CartItem>
        <img src={item.src} alt={item.name} />
        <div>
          <h4>{item.name}</h4>
          <ul>
            <li>
              <span>Cards Ammount</span>
              <span>{item.number}</span>
            </li>
            <li>
              <span>Total</span>
              <span>{item.price * item.number}</span>
            </li>
          </ul>
        </div>
      </CartItem>)}
    </CartDiv>
  )
}

const CartDiv = styled.div`
  position: absolute;
  right: 0;
  width: 30vw;
  height: 88vh;
  background-color: var(--secondary-op60);
  padding: 1rem;
`;

const CartItem = styled.div`
  
`;

