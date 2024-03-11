import React,{useState} from 'react';
import Logo from '../../assets/mainlogo.png'
import { Img,LoginBox ,InputWrapper,PwCheckBox,Notice} from './styles';
import Input from '../Input';
import mail from '../../assets/mail.png'
import lock from '../../assets/lock.png'
import Button from '../Button';
import KakaoLogin from '../KakaoLogin';
import { Link } from 'react-router-dom';

interface ValueType{
    id : string,
    password : string
}

const Login = () =>{
    const [showPswd, setShowPswd] = useState<boolean>(false);
    const [values,setValues] = useState<ValueType>({
        id : '',
        password:''
    })
    const handleShowPwChecked = () =>{
        setShowPswd(!showPswd);
    }
    const onClickLoginButton = () =>{
        //api연결
    }
    const isUserIdValid = (Id: string,Pw:string) => {
        return Id.length >= 1 && Id.length <= 20 && Pw.length >= 6 &&Pw.length<=20;
      };
    
      const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setValues(prevState => ({
          ...prevState,
          [name]: value
        }));
      };
      
    return (
      <>
        <LoginBox>
          <Img src={Logo} alt="mainLogo" />
          <InputWrapper>
            <Input name = 'id' placeholder='전화번호, 사용자 이름 또는 이메일' type='email' image ={mail} value ={values.id} onChange={handleChange}></Input>
          </InputWrapper>
          
          <InputWrapper>
            <Input name = 'password' placeholder='비밀번호' type={showPswd ? "text" : "password"} image ={lock} value ={values.password} onChange={handleChange}></Input>
            {values.password&&<PwCheckBox onClick={handleShowPwChecked}>비밀번호 표시</PwCheckBox>}
          </InputWrapper>
          <Button isActive={isUserIdValid(values.id,values.password)} onClick={onClickLoginButton}>로그인</Button>
          <p>or</p>
          <KakaoLogin/>
          <Notice>잘못된 비밀번호입니다. 다시 확인해주세요</Notice>
          <Link to='/'>비밀번호를 잊으셨나요?</Link>
        </LoginBox>
      </>
    );

}

export default Login;