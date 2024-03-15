import React from "react";
import home from "../../assets/home-mockup.png"
import Download from "../../components/Download";
import { Container, Img } from "../login/styles"
import {AppContainer,Wrap} from "./styles"
import AppHeader from "../../components/Header";
import Profile from "../../components/profile";
import Subscribe from "../../components/Subscribe";
// import Modal from "../../components/Modal";


const PayPage = () => {
  return (
    <>
        <Wrap>
        <AppHeader/>
                  <Profile/>
      <AppContainer>
        <Img src={home} alt="main" />
        <Container>
          <Subscribe/>
          <Download />
        </Container>
      </AppContainer>
        </Wrap>
{/* 
        <Modal/> */}
    </>
  );
};
export default PayPage;