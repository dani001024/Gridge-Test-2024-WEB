import React,{useEffect}from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Redirection = () =>{
    const code = new URL(document.location.toString()).searchParams.get('code');
    const navigate = useNavigate();
    useEffect(() => {
        axios.post(`https://api-sns.gridge-test.com/auth/kakao/sign-in-by-code?code=${code}`).then((r) => {
          console.log(r.data); // 토큰과 함께 오는 정보들을 출력해보자
          navigate('/'); // 
        });
      }, []);
    return(
    <>

    </>
    )
}
export default Redirection;