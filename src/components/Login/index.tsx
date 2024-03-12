import React, { useState } from "react";
import Logo from "../../assets/mainlogo.png";
import { Img, LoginBox, Notice } from "./styles";
import Input from "../Input";
import mail from "../../assets/mail.png";
import lock from "../../assets/lock.png";
import Button from "../Button";
import KakaoLogin from "../KakaoLogin";
import { Link } from "react-router-dom";

interface ValueType {
  id: string;
  password: string;
}

const Login = () => {
  const [values, setValues] = useState<ValueType>({
    id: "",
    password: "",
  });
  const onClickLoginButton = () => {
    //api연결
  };
  const isUserIdValid = (Id: string, Pw: string) => {
    return (
      Id.length >= 1 && Id.length <= 20 && Pw.length >= 6 && Pw.length <= 20
    );
  };
  const validatePassword = (password: string) => {
    console.log('비밀번호',password.length >= 6)
    return password.length >= 6;
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <>
      <LoginBox>
        <Img src={Logo} alt="mainLogo" />
          <Input
            name="id"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            type="email"
            image={mail}
            value={values.id}
            onChange={handleChange}
          ></Input>
          <Input
            name="password"
            placeholder="비밀번호"
            type={"password"}
            image={lock}
            value={values.password}
            onChange={handleChange}
          ></Input>
        <Button
          isActive={isUserIdValid(values.id, values.password)}
          onClick={onClickLoginButton}
        >
          로그인
        </Button>
        <p>or</p>
        <KakaoLogin />
        {/* api 연결 후 비밀 번호 틀린 경우로 수정 필요 */}
        {values.password&&!validatePassword(values.password)&&<Notice>잘못된 비밀번호입니다. 다시 확인해주세요</Notice>}
        <Link to="/">비밀번호를 잊으셨나요?</Link>
      </LoginBox>
    </>
  );
};

export default Login;
