import styled from "styled-components";
//StoryCircle.tsx
export const Ellipse = styled.div`
display: flex; 
justify-content: center;
align-items: center; 
background: linear-gradient(209.83deg, #1570EF 7.74%, #9EEFF4 94.51%);
width :80px;
height:80px;
border-radius: 70%;
overflow: hidden;
flex-shrink :0;

`
export const Img = styled.img`
width :90%;
height:90%;
border-radius: 70%;
overflow: hidden;
border : 3px solid white;
`
//Story.tsx
export const StoryWrapper = styled.div`
display: flex;
justify-content: start;
align-items: center; 
width :520px;
height:130px;
border: 1px solid rgba(204, 204, 204, 1);
border-radius:10px;
padding : 0 15px;
gap : 10px;
overflow-x: auto;
white-space: nowrap;

::-webkit-scrollbar {
    width: 1px; /* 스크롤바의 너비 */
    height:5px;
  }

  /* 스크롤바 막대 */
  ::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.2); /* 스크롤바 막대 색상 */
    border-radius: 4px; /* 스크롤바 막대 모서리 반지름 */
    width:30%;
  }

  /* 스크롤바 뒷 배경 */
  ::-webkit-scrollbar-track {
    background-color: rgba(0, 0, 0, 0.05); /* 스크롤바 뒷 배경 색상 */
    border-radius: 1px; /* 스크롤바 뒷 배경 모서리 반지름 */
  }
}
`