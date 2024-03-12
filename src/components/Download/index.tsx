import React from "react";
import { ImgWrapper,Wrapper } from "./styles";
import PlayStore from "../../assets/playstore.png"
import AppStore from "../../assets/appstore.png"

const Download = () => {
    return (
      <Wrapper>
        <p>앱을 다운로드 하세요</p>
        <ImgWrapper>
          <img src={PlayStore} alt="play store" />
          <img src={AppStore} alt="app store" />
        </ImgWrapper>
      </Wrapper>
    );
}

export default Download;