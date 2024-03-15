import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import packageJson from "../../../package.json";
import { Header, Wrap,NavStyle,Img,InputWrapper } from "./styles";
import logo from "../../assets/mainlogo.png"
import search from "../../assets/search.png"
import { FiHome,FiPlusSquare } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { LuSend } from "react-icons/lu";
import Input from "../Input";

const AppHeader = () => {
  const [value, setValue] = useState('')
  const handleChange = ()=>{
    setValue('')
  }
  return (
    <Header>
          <Img src={logo} alt='로고'/>
          <InputWrapper>
          <Input
          name="search"
          placeholder="검색"
          type="email"
          image={search}
          value={value}
          onChange={handleChange}/></InputWrapper>

      <Wrap>
      <NavStyle to="/"><FiHome /></NavStyle>
      <NavStyle to="/"><LuSend /></NavStyle>        
      <NavStyle to="/"><FiPlusSquare /></NavStyle>
      <NavStyle to="/payPage"><FaRegHeart /></NavStyle>
      </Wrap>
    </Header>
  );
};

export default AppHeader;
