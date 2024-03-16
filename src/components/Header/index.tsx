import React, { useState } from "react";

import { Header, Wrap,NavStyle,Img,InputWrapper,NavImg,Container } from "./styles";
import logo from "../../assets/mainlogo.png"
import search from "../../assets/search.png"
import example from "../../assets/example.png"
import { FiHome,FiPlusSquare } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { LuSend } from "react-icons/lu";
import Input from "../Input";
import Menu from "../menu";

const AppHeader = () => {
  const [value, setValue] = useState('')
  const [open, setOpne] = useState(false);
  const handleChange = ()=>{
    setValue('')
  }
  const handleModalOpen = ()=>{
    setOpne((prev)=>!prev);
  }
  return (
    <Container>
      <Header>
        <Img src={logo} alt="로고" />
        <InputWrapper>
          <Input
            name="search"
            placeholder="검색"
            type="email"
            image={search}
            value={value}
            onChange={handleChange}
          />
        </InputWrapper>
        <Wrap>
          <NavStyle to="/">
            <FiHome />
          </NavStyle>
          <NavStyle to="/">
            <LuSend />
          </NavStyle>
          <NavStyle to="/write">
            <FiPlusSquare />
          </NavStyle>
          <NavStyle to="/payPage">
            <FaRegHeart />
          </NavStyle>
          <NavImg src={example} onClick={handleModalOpen}></NavImg>
        </Wrap>
      </Header>
      {open&&<Menu />}
    </Container>
  );
};

export default AppHeader;
