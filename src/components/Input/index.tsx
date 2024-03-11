import React from "react";
import {StyledInput,InputBox,Img} from './styled'

interface InputProps {
    type : string,
    name : string,
    placeholder : string,
    autocomplete? :string,
    image : string
    value : string,
    onChange :(event: React.ChangeEvent<HTMLInputElement>)=> void
}

const Input = (props:InputProps) =>{
    const {type,placeholder,image,value,name,onChange} = props;
    
    return (
      <>
        <InputBox>
          <Img src={image} />
          <StyledInput name={name} type={type} placeholder={placeholder} value={value} onChange={onChange} />
        </InputBox>
      </>
    );
}

export default Input;