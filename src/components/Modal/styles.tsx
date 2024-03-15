import styled from "styled-components";
export const H4 = styled.h4`
 font-size :16px;
 font-weight:700;
 margin:0;
  
`;
export const H5 = styled.h5`
font-size :16px;
font-weight:500;
  color:#7F7F7F;
  margin-top:3px;
  // margin-bottom:15%;
  
`;
export const StyledModal = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    width: 448px;
    height: 223px;
    border-radius: 10px;
    background-color:#FFFFFF;
    position:relative;

`;
export const P = styled.p`
 width : 100%;
 height: 40px;
 line-height : 30px;
 border-top: 1px solid  #cccccc;
 text-align:center;
 margin:0;
 font-size:14px;
 &.custom{
  color: #F04438;
  font-weight:600;
 }

`;
export const Box = styled.div`
width  :100%;
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items:center; 
padding : 0;
position:absolute;
bottom:0;
margin:0;
`;
export const Container = styled.div`
background-color:#00000066;
display: flex;
align-items: center;
justify-content:center;
width : 100vw;
height: 130%;
z-index:5;
position:absolute;
top:0;
left:0;
`;