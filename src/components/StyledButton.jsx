import styled from "styled-components";

const StyledButton = styled.button`
  background-color: var(--main);
  background: linear-gradient(13deg, var(--main) 0%, var(--secondary) 100%);
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 7px;
  padding: 4px 8px;
  margin-left: 1rem;
  cursor: pointer;

  &:active {
    color: var(--grey);
    transform: scale(0.95);
  }
`;

export default StyledButton;