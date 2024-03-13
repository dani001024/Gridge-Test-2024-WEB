import React, { useState }  from "react";
import { Icon, Wrapper, StyledList, ListItem,Box,Img } from "./styles";
import arrow from "../../assets/arrow.png";
import check from "../../assets/check.png"
import { useSetRecoilState } from "recoil";
import { birthdayState } from "../../recoil/singup";

interface Props {
    name :string,
    list :string[]
}

const DropBox = (props:Props) => {
  const {name , list} = props
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(`${name}`);
  const setBirthday = useSetRecoilState(birthdayState);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (selectedValue: string) => {
    setIsOpen(false);
    setSelectedValue(selectedValue);
    setBirthday((prevState) => ({
      ...prevState,
      [name.toString()]: selectedValue,
    }));
  };
  const handleBlur = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Wrapper onBlur={handleBlur}>
        <Box onClick={handleToggle}>
        <div>{selectedValue}</div>
        <Icon src={arrow} alt="arrow" />
        </Box>

        <StyledList isOpen={isOpen}>
          {list.map((vlaue, index) => (
            <ListItem key={index} onClick={() => handleSelect(vlaue)}>
              {vlaue}
              <Img src={check} alt="체크"/>
            </ListItem>
          ))}
        </StyledList>
      </Wrapper>
    </>
  );
};
export default DropBox;

