import React from 'react';
import { StyledButton } from './styles';

interface CustomButton {
    children: string;
    isActive: boolean;
    onClick: () => void;

  }
const Button = (props:CustomButton) =>{
    const {children,onClick,isActive} = props;
    console.log(isActive);
    return(
        <>
        <StyledButton onClick={onClick} disabled={!isActive}>{children}</StyledButton>
        </>
    )

}

export default Button