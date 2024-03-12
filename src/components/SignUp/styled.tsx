import styled from "styled-components";

export const Wrpper = styled.div`
    display:flex;
    flex-direction : column;
    align-items :center;
    gap : 10px;
    border : 1px solid #CCCCCC;
    width : 416px;
`
export const Img = styled.img`
    width : 24px;
    height:24px;
    position : absolute;
    right: 10px;
        &&.pw{
            right : 85px;
        }

`
export const OxImg = styled.img`
    width : 24px;
    height:24px;
    position : relative;
    right: 5px;

`
export const StyledP = styled.p`
color : #F04438;
font-size:14px;
font-weight : 600;
text-align:center;
`