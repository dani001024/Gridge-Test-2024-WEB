import React, { useEffect, useState } from "react";
import Input from "../Input";
import setting from "../../assets/settings.png";
import person from "../../assets/person.png";
import lock from "../../assets/lock.png";
import mail from "../../assets/mail.png";
import { useRecoilState } from "recoil";
import { singUpState } from "../../recoil/singup";
import {Wrapper,StyledP} from "./styled";
import Button from "../Button";
import { Img } from "../Login/styles";
import KakaoLogin from "../KakaoLogin";
import logo from "../../assets/mainlogo.png"


const SingUp = () => {
  const [signupInfo, setSignUpInfo] = useRecoilState(singUpState);
  const [isActive,setIsActive] = useState(false);

  useEffect(() => {
    const savedSignupInfo = localStorage.getItem("signupInfo");
    if (savedSignupInfo) {
      setSignUpInfo(JSON.parse(savedSignupInfo));
    }

    setIsActive(
        validatePhoneNumber(signupInfo.contactInfo) &&
        validateName(signupInfo.name) &&
        validateID(signupInfo.id) &&
        validatePassword(signupInfo.password)
    );

  }, [setSignUpInfo]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let { name, value } = event.target;
    if (value.length > 20) {
      value = value.slice(0, 20);
    }

    setSignUpInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    localStorage.setItem("signupInfo", JSON.stringify(signupInfo));
    validatePhoneNumber(signupInfo.contactInfo);
    validateName(signupInfo.name);
    validateID(signupInfo.id);
    validatePassword(signupInfo.password);
  };

  const validatePhoneNumber = (contactInfo: string) => {
    console.log(/^\d{11}$/.test(contactInfo),'전화번호');
    return /^\d{11}$/.test(contactInfo);
  };

  // 성명 검사
  const validateName = (name: string) => {
    return name.length > 0;
  };

  // ID 검사
  const validateID = (id: string) => {
    return /^[a-z0-9_.]+$/.test(id);
  };

  // 비밀번호 검사
  const validatePassword = (password: string) => {
    console.log('비밀번호',password.length >= 6)
    return password.length >= 6;
  };

  const onClickButton = () =>{
    //api
  }

  return (
    <Wrapper>
      <Img src={logo} alt="로고"/>
      <p>친구들과 함께 여행 이야기를 공유하고 보세요</p>
      <KakaoLogin/>
      <p>or</p>
      <Input
        type="text"
        placeholder="전화번호,사용자 이름 또는 이메일"
        image={mail}
        value={signupInfo.contactInfo}
        name="contactInfo"
        onChange={handleChange}
        ox={validatePhoneNumber(signupInfo.contactInfo)}
      ></Input>
      <Input
        type="text"
        placeholder="성명"
        image={person}
        value={signupInfo.name}
        name="name"
        onChange={handleChange}
        ox={validateName(signupInfo.name)}
      ></Input>
      <Input
        type="text"
        placeholder="사용자 이름"
        image={setting}
        value={signupInfo.id}
        name="id"
        onChange={handleChange}
        ox = {validateID(signupInfo.id)}
      ></Input>
      <Input
        type={"password"}
        placeholder="비밀번호"
        image={lock}
        value={signupInfo.password}
        name="password"
        onChange={handleChange}
        ox={validatePassword(signupInfo.password)}
      ></Input>
      <Button onClick={onClickButton} isActive={isActive}>가입</Button>
      {signupInfo.contactInfo&&!validatePhoneNumber(signupInfo.contactInfo)&&<StyledP>휴대폰 번호가 정확하지 않습니다. 국가번호를 <br/> 포함하여 전체 전화번호를 입력해주세요 </StyledP>}
      {signupInfo.id&&validatePhoneNumber(signupInfo.contactInfo)&&!validateID(signupInfo.id)&&<StyledP>사용자 이름에는 문자, 숫자 밑줄 및 마침표만<br/>사용할 수 있습니다.</StyledP>}
      {/* <StyledP>사용할 수 없는 사용자 이름입니다.<br/>다른 이름을 사용하세요</StyledP> */}
    </Wrapper>
  );
};

export default SingUp;
