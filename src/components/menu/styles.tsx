import styled from "styled-components";

export const Wrapper = styled.div`
  width: 280px;
  height: 312px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border: 1px solid #eaecf0;
  position :absolute;
  right : 15px;
  background-color : white;
  padding : 20px;
  box-shadow: 0px 12px 16px -4px rgba(16, 24, 40, 0.08);

`;
export const Row = styled.div`
  width: 100%;
  height: 48px;
  display: flex;
  align-items: center;
  gap : 8px;
svg {
    width: 24px;
    height: 24px;
  }
  p{
    font-size:16px;
    font-weight : 600;
  }

`;
