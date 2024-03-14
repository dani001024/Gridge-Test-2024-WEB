import styled from "styled-components";
import { supportDeviceSize } from "../../components/styles";

export const LoginRoot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 1080px;
  height: 100vh;
  background-color: green;

  @media all and (max-width: ${supportDeviceSize}px) {
    width: 100vw;
  }
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  width: 45rem;
  height: 30rem;
  padding: 3rem;
  border: 0.5rem solid yellow;
  background-color: red;
`;

export const InputWrap = styled.input`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 4rem;
  padding-left: 1rem;
  margin-bottom: 6rem;
`;

export const LoginButton = styled.div`
  width: 100%;
  padding: 1rem;
  border-radius: 0.6rem;
  background-color: rgb(59, 105, 246);
  font-size: 1.8rem;
  font-weight: 600;
  color: white;
  text-align: center;
  cursor: pointer;
`;

export const Container = styled.div`
  display :flex;
  flex-direction : column;
  align-items:center;
  gap:6px;
  width : 35vw;
  max-width : 416px;
  p{
    font-size:1.3333em;
    color:#7F7F7F;
    font-weigth:500;
  }
  @media (max-width: 1000px) {
    width : 55%;
  }

`
export const AppContainer = styled.div`
background-color:black;
display:flex;
padding:1vw 0 ;
align-items:center;
width : 100%;
height : 98vh;
gap : 20px;
@media (max-width: 1000px) {
  width : 80vw;
}
`
export const Img = styled.img`
width : 35vw;
max-width: 500px;

`
export const ImgWrapper = styled.div`
display:flex;
gap:10px;
justify-content:center;
img{
  width : 29%
}
`