import styled from "styled-components";

export const Wrapper = styled.div`
  border: 1px solid #cccccc;
  width: 416px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding-top: 20px;
  background-color: white;
  a {
    text-decoration: none;
    color: #2e90fa;
  }
`;
export const Title = styled.h4`
  font-size: 18px;
  font-weight: 600;
`;
export const StyledP= styled.p`
  color: #7f7f7f;
  font-size: 14px;
  font-weight: 400;
`;
export const Box = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a,h3 {
    font-size: 16px;
    font-weight: 500;
    margin: 2px 0;
  }
`;
export const Img = styled.img`
  width: 20px;
  height: 20px;
`;
export const H5 = styled.h5`
font-size: 16px;
font-weight: 600;
color:#2E90FA;
`;
