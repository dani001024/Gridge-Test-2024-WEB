import styled from "styled-components";
import { NavLink } from "react-router-dom";


export const Header = styled.div`
  width:100vw;
  height:80px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  // margin: 1rem;
  // padding: 1rem;
/
`;

export const Img = styled.img`
  width:140px;
  height:50px;
  padding : 0 100px;
`;
export const Wrap = styled.div`
  display: flex;
  align-items: center;
  margin-left: 5rem;
  margin-right: 5rem;
  gap : 5px;
`;

export const InputWrapper = styled.div`
width:35%; 
`;

export const Button = styled.div`
  padding: 1rem;
  margin-left: 1.5rem;
  margin-right: 1.5rem;
  border-radius: 0.6rem;
  background-color: blue;
  font-size: 1.2rem;
  font-weight: 600;
  color: white;
  text-align: center;
  cursor: pointer;
`;
export const NavStyle = styled(NavLink)`
color: #999999;
padding: 5px;
margin: 5px;
text-decoration: none;
transition: color 0.5s;
width: 24px;

svg {
  width: 24px;
  height: 24px;
}

&.active {
  color: #101828;
}
`