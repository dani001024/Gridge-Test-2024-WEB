import styled from "styled-components";
import { IoPersonOutline } from "react-icons/io5";


export const ProfileBox = styled.div`

  
`;
export const Wrapper = styled.div`
    display :flex;
    align-items:center;
    gap : 5px;
  h1{
    font-size:30px;
    font-family : SF-Pro-Display;
    font-weight : 500;
    margin : 0;
    padding:0;
  }
  button{
    height : 22px;
    font-size:12px;
    border:0.5px solid #B2B2B2;
    border-radius:3px;
  }
`;
export const H4 = styled.h4`

  
`;

export const StyledPre = styled.pre`

  
`;
export const Container = styled.div`
display :flex;
height : 500px;
backgroud-color:black;
`
export const Icon = styled(IoPersonOutline)`
  /* 아이콘의 스타일 */
  font-size: 100px; /* 아이콘 크기 조절 */
  color: #999999; /* 아이콘 색상 지정 */
  margin : 0 20px 20px 20px;
`;