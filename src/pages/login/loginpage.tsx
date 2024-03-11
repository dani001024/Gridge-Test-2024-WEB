import React from "react";
import Login from "../../components/Login";
import home from "../../assets/home-mockup.png"
import PageLink from "../../components/PageLink";
import { AppContainer,Container,Img,ImgWrapper } from "./styles";
import PlayStore from "../../assets/playstore.png"
import AppStore from "../../assets/appstore.png"

const LoginPage = () =>{
return(
    <AppContainer>
    <Img src={home} alt="첫화면이미지"/>
    <Container>
        <Login/>
        <PageLink messege="계정이 없으신가요?"link="singup" page="가입하기"></PageLink>
        <p>앱을 다운로드 하세요</p>
        <ImgWrapper>
            <img src={PlayStore} alt="play store"/>
            <img src={AppStore} alt="app store"/>
        </ImgWrapper>
    </Container>
    </AppContainer>
)
}
export default LoginPage;