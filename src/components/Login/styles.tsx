import styled from "styled-components";

export const LoginBox = styled.div`
    border : 1px solid #CCCCCC;
    width : 416px;
    display :flex;
    flex-direction:column;
    align-items:center;
    gap:10px;
    padding-top: 70px;
    padding-bottom: 40px;
    background-color:white;
    a{
        text-decoration:none;
        color:#7F7F7F;
        font-weight : 400;
        font-size:1.1667em;
    }
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
    position : relative;
    width : 80px;
    right : 0px;
    font-weight :600;
`
export const Notice = styled.p`
color :#F04438;
font-weight : 600;
`