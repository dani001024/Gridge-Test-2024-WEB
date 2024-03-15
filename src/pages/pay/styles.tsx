import styled from "styled-components";
export const AppContainer = styled.div`
// background-color:gray;
display:flex;
justify-content : center;
padding:1vw 0 ;
align-items:center;
width : 100vw;
height : 100%;
gap : 20px;
img{
    width : 100%
    height:100%;
}
@media (max-width: 1000px) {
  width : 80vw;
}
`
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
export const Wrap = styled.div`
display :flex;
flex-direction : column;
align-items:center;
justify-content: space-between;
height : 100vh;
// background-color:red;
`