import React, { useEffect } from "react";
import home from "../../assets/home-mockup.png"
import Download from "../../components/Download";
import { Container, Img } from "../login/styles"
import {AppContainer,Wrap} from "./styles"
import AppHeader from "../../components/Header";
import Profile from "../../components/profile";
import Subscribe from "../../components/Subscribe";
// import Modal from "../../components/Modal";
import { useNavigate } from "react-router-dom";

const PayPage = () => {
  const navigate = useNavigate()
  useEffect(()=>{
    if(!localStorage.getItem("jwt")){
      navigate('/login');
    }
  },[])

  return (
    <>
      <Wrap>
        <AppHeader />
        <Profile />
        <AppContainer>
          <Img src={home} alt="main" />
          <Container>
            <Subscribe />
            <Download />
          </Container>
        </AppContainer>
      </Wrap>
    </>
  );
};
export default PayPage;