import React from "react"
import styled from "styled-components"

const ButtonStyled = styled.button`
  background-color: ${(props) => (props.primary ? "blue" : "gray")};
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: darkblue;
  }
`

const Button = ({ children, primary, onClick }) => {
  <ButtonStyled primary={primary} onClick={onClick}>
    {children}
  </ButtonStyled>
}

export default Button
