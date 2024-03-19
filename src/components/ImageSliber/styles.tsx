import styled from "styled-components";
export const Wrapper = styled.div`
  position: relative;
  width: 520px;
  height: 520px;
  overflow: hidden;
`;

export const ImageContainer = styled.div`
  display: flex;
  transition: 0.6s;
  flex-shrink: 0;

`;

export const Image = styled.div`
  height: 520px;
  width: 520px;
  background-size: cover;
  background-position: center center;
  flex-shrink: 0;
  border-radius: 10px 10px 0px 0px;
`;

export const Left = styled.span`
  position: absolute;
  left: 5px;
  top: 50%;
  cursor: pointer;
  z-index: 1;
  svg {
    width: 30px;
    height: 30px;
    color: rgba(0, 0, 0, 0.4);
  }
  &.hidden {
    display: none;
  }
`;

export const Right = styled.span`
  position: absolute;
  right: 5px;
  top: 50%;
  cursor: pointer;
  svg {
    width: 30px;
    height: 30px;
    color: rgba(0, 0, 0, 0.4);
  }
  &.hidden {
    display: none;
  }
`;

export const PageIndicator = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: -20px;
  left: 50%;
  transform: translateX(-50%);
`;

export const PageDot = styled.div<{ isSelected: boolean }>`
  width: 5px;
  height: 5px;
  border-radius: 50%;
  margin: 0 5px;
  background-color: ${({ isSelected }) => (isSelected ? 'rgba(47, 128, 237, 1)' : 'rgba(224, 224, 224, 1)')};
`;
