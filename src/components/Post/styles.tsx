import styled from "styled-components";
//index.tsx
export const PostConstainer = styled.div`
width: 100%;
height: 100%;
display : flex;
position:relative;
align-items :flex-end;
justify-content : center;
gap : 100px;
margin : 30px 0;
`
export const Span = styled.span`
    display:flex;
    flex-direction:column;
    gap:10px;
    width:400px;
`
export const Constainer = styled.div`
width: 520px;
height: 757px;
border-radius: 10px;   
border: 1px solid #CCCCCC;
background-color : white;
font-size : 14px;
`

export const ImgWrapper = styled.div`
  position: relative;
  width: 520px;
  height: 520px;
`;
export const Img = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 50%;
`;
export const PostImg = styled.img`
  width: 520px;
  height: 520px;
  border-radius: 10px, 10px, 0px, 0px;
`;
export const Wrap = styled.div`
  position: absolute;
  top: 1%;
  left: 3%;
  display: flex;
  align-items: center;
  gap: 5px;
  z-index: 1;
  p {
    font-family: SF Pro Display;
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
    color: rgba(255, 255, 255, 1);
  }
`;

//Sheet.tsx
export const Reaction = styled.div`
  display:flex;
  align-items:center;
  gap:15px;
  svg{
    width:24px;
    height:24px;
  }
  
`
export const StyledMoreBtn = styled.button`
font-size: 14px;
font-weight: 500;
color:#7F7F7F;
background-color:transparent;
border:none;
  
`
export const Row = styled.div`
  display:flex;
  align-items:center;
  justify-content: space-between;
  padding: 5px 30px;
  gap:15px;
  svg{
    width:24px;
    height:24px;
    &.fill{
        color:red;
    }
  }
`
//ContentText.tsx
interface Props {
    showMore: boolean;
  }
export const Pre = styled.div`
// width : 360px;
height : 210px;
`

export const Box = styled.div<Props>`
width : 400px;
height : 250px;
border-radius : 10px;
background-color : white;
font-size : 14px;
padding : 20px;
visibility: ${(props) => (props.showMore ?'visible': 'hidden')};

`

//Comment.tsx
export const CommentBox = styled.div<Props>`
width : 400px;
max-height : 250px;
display:flex;
flex-direction : column;
gap : 15px;
background-color:white;
border-radius : 10px;
padding:20px;
visibility: ${(props) => (props.showMore ?'visible': 'hidden')};
`
export const CommentRow = styled.div`
font-size:14px;
`
export const CommentList = styled.div`
overflow-y:scroll;
::-webkit-scrollbar {
    width: 0px; /* 스크롤바의 너비 */
    height:0px;
  }

`
export const WriteUser = styled.p`
 font-size:14px;
 font-weight : 500;
 font-family: SF-Pro-Display;
`
export const Input = styled.input`
border:none;
background-color:white;
width:70%;
height:90%;
`
export const InputWrapper = styled.div`
display:flex;
background-color:white;
width: 100%;
height:35px;
align-items:center;
justify-content:space-around;
img{
    width: 35px;
    height:35px;
    border-radius:50%;
}
button{
    background-color: transparent;
    border:none;
    color:#B2DDFF;
    width: 50px;
    height:100%;
}
`
