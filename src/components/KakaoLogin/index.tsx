import React from 'react';
import { Button,Img } from './styles';
import kakaoLogo from '../../assets/kakaoLogo.png'

const KakaoLogin = () =>{
    const Rest_api_key='44a90896f3ee78d0e03712d6cd025cfd' //REST API KEY
    const redirect_uri = 'http://localhost:3000/login/kakao' //Redirect URI
    // oauth 요청 URL
    const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`
    const handleLogin = ()=>{
        window.location.href = kakaoURL
    }
    return(
    <>
    <Button onClick={handleLogin}>
        <Img src={kakaoLogo} alt="kakao"/>카카오 로그인</Button>
    </>
    )
}
export default KakaoLogin;