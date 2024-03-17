import styled from "styled-components";
//StoryCircle.tsx
export const ProfileBox = styled.div`
  display: flex;
  align-items: center;
  gap: 22px;
  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 5px;
  }
`;
export const Img = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
`;
export const P = styled.p`
  font-family: SF Pro Display;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  text-align: left;
  margin: 0;
  color: rgba(127, 127, 127, 1);
`;
export const H3 = styled.h3`
  font-weight: 700;
  font-size: 18px;
  margin: 0;
`;
export const H4 = styled.h4`
  font-weight: 600;
  font-size: 14px;
  margin: 0;
  color:rgba(127, 127, 127, 1);
`;
export const H5 = styled.h5`
  font-weight: 600;
  font-size: 14px;
  margin: 0;
`;
export const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  div {
    display: flex;
    align-items: center;
    gap: 5px;
  }
  img {
    width: 30px;
    border-radius: 50%;
  }
`;
export const StyledButton = styled.button`
  border: none;
  background-color: transparent;
  color: rgba(46, 144, 250, 1);
  font-weight: 700;
  font-size: 14px;
`;
export const MoreButton = styled.button`
  border: none;
  background-color: transparent;
  color: black;
  font-weight: 700;
  font-size: 14px;
`;
export const Container = styled.div`
  width : 416px;
  display:flex;
  flex-direction : column;
  gap : 10px;
`;
