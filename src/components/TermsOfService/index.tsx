import React from "react";
import {Wrapper,Title, StyledP,H5} from "./styles"
import Agree from "./agree";
import Button from "../Button";
import { useRecoilValue } from "recoil";
import { allAgreementsState, signupState, birthdayState } from "../../recoil/singup";
import { useNavigate } from "react-router-dom";
import { authSignUp } from "../../apis/auth";

const TermsOfService = () => {
    const isActive = useRecoilValue(allAgreementsState);
    const signupInfo = useRecoilValue(signupState);
    const birthdayInfo = useRecoilValue(birthdayState);
    const fomattedPhone = signupInfo.contactInfo.slice(0, 3) + '-' + signupInfo.contactInfo.slice(3, 7) + '-' + signupInfo.contactInfo.slice(7)
    const requestData = {
      loginId: signupInfo.id,
      password: signupInfo.password,
      realName: signupInfo.name,
      phone: fomattedPhone,
      birthDate: `${birthdayInfo.year}-${birthdayInfo.month}-${birthdayInfo.day}`,
    };
    const navigate = useNavigate()
    const onClickBackBtn = () =>{
        navigate(-1);
    }

    console.log(typeof(signupInfo.password));
    const onClickBtn = async() =>{
      console.log(requestData);
      navigate('/login');
    try {
      const response = await authSignUp(requestData);
      console.log('회원가입 성공', response);
      localStorage.removeItem('signupInfo');
  } catch (error) {
      console.error('회원가입 실패:', error);
      // 에러 처리 로직
  }
    }
  return (
    <Wrapper>
      <Title>이용 약관에 동의</Title>
      <StyledP>
        Tnovel은 회원님의 개인정보를 안전하게 보호합니다.
        <br />새 계정을 만드려면 모든 약관에 동의하세요.
      </StyledP>
      <Agree text="이용약관 3개에 모두 동의" name="all" link=""/>
      <Agree text="이용약관 (필수)" name="termsOfUse" link=""/>
      <Agree text="데이터 정책 (필수)" name="dataPolicy" link=""/>
      <Agree text="위치 기반 기능 (필수)" name="locationBased" link=""/>
      <Button onClick={onClickBtn} isActive={isActive}>다음</Button>
      <H5 onClick={onClickBackBtn}>돌아가기</H5>
    </Wrapper >
  );
};
export default TermsOfService;