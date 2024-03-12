import React,{useState} from "react";
import {StyledInput,InputBox,Img} from './styled'
import { OxImg } from "../SignUp/styled";
import correct from "../../assets/x-circle-1.png";
import incorrect from "../../assets/x-circle.png";
import { PwCheckBox } from "../Login/styles";

interface InputProps {
  type: string;
  name: string;
  placeholder: string;
  autocomplete?: string;
  image: string;
  value: string;
  ox? : boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = (props: InputProps) => {
  const { type, placeholder, image, value, name, ox,onChange } = props;
  const [pwType,setPwType] = useState<string>(type);
  const handleShowPwChecked = () => {
    pwType === "password" ? setPwType("text") :setPwType("password") ;
  };
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
    }
  };
  return (
    <>
      <InputBox>
        <Img src={image} />
        <StyledInput
          name={name}
          type={pwType}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onKeyDown={handleKeyDown}
        />
        
        {value && ox !== undefined &&
          (ox ? (
            <OxImg src={correct} alt="ox" />
          ) : (
            <OxImg src={incorrect} alt="ox" />
          ))}
          {value&&name =='password'&&<PwCheckBox onClick={handleShowPwChecked}>비밀번호표시</PwCheckBox>}
      </InputBox>
    </>
  );
};

export default Input;