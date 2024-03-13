import React, { useState, useEffect } from "react";
import { Img, SelectWrapper,StyledP,Title,Wrapper,StyledH4 } from "./styles";
import cake from "../../assets/cake.png";
import { Link } from "react-router-dom";
import DropBox from "../DropBox";
import Button from "../Button";
import { useRecoilValue } from "recoil";
import { birthdayState } from "../../recoil/singup";

const BirthdaySelect = () => {
  const currentValue = useRecoilValue(birthdayState);
  const [isActive, setIsActive] = useState(false);
  const currentYear = new Date().getFullYear();
  const BIRTHDAY_YEAR_LIST = Array.from(
    { length: 100 },
    (_, i) => `${currentYear - i}`
  );
  const BIRTHDAY_MONTH_LIST = Array.from({ length: 12 }, (_, i) => `${i + 1}`);
  const BIRTHDAY_DAY_LIST = Array.from({ length: 31 }, (_, i) => `${i + 1}`);
  useEffect(() => {
    const { day, month, year } = currentValue;
    setIsActive(!!(day && month && year));
    console.log(currentValue);
  }, [currentValue]);

  const onClickBtn = () => {};
  return (
    <>
      <Wrapper>
        <Img src={cake} alt="birthday" />
        <Title>생일추가</Title>
        <StyledP>공개 프로필에 포함되지 않습니다.</StyledP>
        <Link to={"/infom"}>왜 생일 정보를 입력해야 하나요?</Link>
        <SelectWrapper>
          <DropBox name={"day"} list={BIRTHDAY_DAY_LIST}></DropBox>
          <DropBox name={"year"} list={BIRTHDAY_YEAR_LIST}></DropBox>
          <DropBox name={"month"} list={BIRTHDAY_MONTH_LIST}></DropBox>
        </SelectWrapper>
        <StyledP>태어난 날짜를 입력해야 합니다.</StyledP>
        <Button onClick={onClickBtn} isActive={isActive}>
          가입
        </Button>
        <StyledH4>돌아가기</StyledH4>
      </Wrapper>
    </>
  );
};
export default BirthdaySelect;
