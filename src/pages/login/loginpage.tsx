import React from "react";
import Login from "../../components/Login";
import home from "../../assets/home-mockup.png"
import PageLink from "../../components/PageLink";
import { AppContainer,Container,Img } from "./styles";
import Download from "../../components/Download";

const LoginPage = () =>{
return (
  <AppContainer>
    <Img src={home} alt="첫화면이미지" />
    <Container>
      <Login />
      <PageLink
        messege="계정이 없으신가요?"
        link="signup"
        page="가입하기"
      ></PageLink>
      <Download />
    </Container>
  </AppContainer>
);
}
export default LoginPage;