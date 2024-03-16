import React from "react";
import {Wrapper,Row} from "./styles"
import { IoPersonOutline } from "react-icons/io5";
import { FaRegBookmark } from "react-icons/fa6";
import { LuSettings } from "react-icons/lu";
import { IoAlertCircleOutline } from "react-icons/io5"
const Menu =()=>{
  const LogoutBtn = ()=>{
    localStorage.clear();
  }
    return (
      <>
        <Wrapper>
          <Row>
            <IoPersonOutline />
            <p>프로필</p>
          </Row>
          <Row>
            <FaRegBookmark/>
            <p>저장됨</p>
          </Row>
          <Row>
            <LuSettings/>
            <p>설정</p>
          </Row>
          <Row>
            <IoAlertCircleOutline/>
            <p>문제 신고</p>
          </Row>
          <Row onClick={LogoutBtn}>
            <LuSettings/>
            <p>로그아웃</p>
          </Row>
        </Wrapper>
      </>
    );
}
export default Menu;