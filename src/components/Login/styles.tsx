import styled from "styled-components";

export const LoginBox = styled.div`
    border : 1px solid #CCCCCC;
    width : 416px;
    //height : 559px;
    display :flex;
    flex-direction:column;
    align-items:center;
    gap:10px;
    padding-top: 70px;
    padding-bottom: 40px;
`;
export const Img = styled.img`
width : 52%;

`
export const InputWrapper = styled.div`
    display : flex;
    position: relative;
    width: 80%;
    margin-rigth:0;

`
export const PwCheckBox = styled.div`
    position : absolute;
    width : 80px;
    top : 12px;
    right : 0px;
    font-weight :600;
`
export const Notice = styled.p`
color :#F04438;
font-weight : 600;
`