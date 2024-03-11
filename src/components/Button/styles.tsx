import styled from "styled-components";
interface ButtonProps {
    disabled?: boolean; 
  }
export const StyledButton = styled.button<ButtonProps>`
    background-color :  ${props => props.disabled ? '#B2DDFF' :'#2E90FA' };
    color : white;
    width : 80%;
    height : 44px;
    border : none;
    border-radius : 30px;
    font-weight : 600;
`