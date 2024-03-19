import styled from "styled-components";

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
  justify-content: space-between;
  gap:6px;
  height:90%;
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
background-color:#F6F6F6;
display:flex;
padding:1vw 0 ;
align-items:center;
justify-content : center;
width : 100vw;
height : 96vh;
gap : 20px;
@media (max-width: 1000px) {
  width : 80vw;
}
`
export const Img = styled.img`
height : 100%;
`
export const ImgWrapper = styled.div`
display:flex;
gap:10px;
justify-content:center;
img{
  width : 29%
}
`