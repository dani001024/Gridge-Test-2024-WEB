import React,{useEffect} from "react";
import {AppContainer, Container} from "./styles"
import AppHeader from "../../components/Header";
import Feed from "../../components/Post/Feed";
import Sidebar from "../../components/Sidebar";
import Story from "../../components/Story";
import { useNavigate } from "react-router-dom";


const HomePage = () => {
  const navigate = useNavigate()
  useEffect(()=>{
    if(!localStorage.getItem("jwt")){
      navigate('/login');
    }
  },[])
  return (
    <AppContainer>
      <AppHeader />
      <Container>
        <Story />
        <Sidebar />
      </Container>
      <Feed />
    </AppContainer>
  );
};
export default HomePage;