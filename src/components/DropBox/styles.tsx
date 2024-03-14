import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  width: 101px;
  height: 44px;
  align-items: center;
  justify-content: space-around;
  cursor: pointer;
  border: 1px solid #b2b2b2;
  border-radius: 8px;
  padding-left: 10px;
  @media (max-width: 850px) {
    width : 100%;
  }
`;
export const Icon = styled.img`
  position: absolute;
  right: 13px;
  width: 20px;
  height: 20px;
`;
export const StyledList = styled.div`
  width: 100%;
  height : 533px;
  overflow-y: auto;
  list-style-type: none;
  position: absolute;
  top: -40vh;
  left: 0;
  background-color: white;
  border: 1px solid #ccc;
  display: none;
  z-index: 100;
  display: ${({ isOpen }: { isOpen: boolean }) => (isOpen ? "block" : "none")};
  ::-webkit-scrollbar {
    display: none; /*Chrome, Safari, Opera*/
    width: 0px;
  } 
`;
export const ListItem = styled.li`
  height: 44px;
  line-height: 44px;
  font-size: 16px;
  font-weight: 600;
  font-family: SF-Pro-Display;
  padding: 0 10px;
  display:flex;
  align-items:center;
  justify-content : space-around;
  &:hover {
    background-color: #f6f6f6;
    img{
        visibility: visible;
    }
  }
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  font-size: 16px;
  font-weight: 400;
  color: #7f7f7f;
`;
export const Img = styled.img`
  width :20px;
  height : 20px;
  visibility: hidden;
`;
