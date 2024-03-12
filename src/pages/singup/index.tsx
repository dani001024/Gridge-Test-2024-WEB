import React from "react";
import PageLink from "../../components/PageLink"
import SingUp from "../../components/SignUp"
import { AppContainer, Container, Img } from "../login/styles"
import home from "../../assets/home-mockup.png"
import Download from "../../components/Download";


const SignUpPage = () => {
    return(
        <AppContainer>
            <Img src ={home} alt="main"/>
            <Container>
                <SingUp/>
                <PageLink messege="계정이 있으신가요?" link="login" page="로그인"/>
                <Download/>
            </Container>
        </AppContainer>
    )
}
export default SignUpPage;