import React,{useState} from "react";
import { H4, Img,P,Wrapper,StyledButton } from "./styles";
import logo from "../../assets/mainlogo.png"
import Payment from "../Payment";
import { useRecoilValue  } from "recoil";
import { subscribeState } from "../../recoil/subscribe";
import Modal from "../Modal";

const Subscribe = () => {
  // const resetExampleState = useResetRecoilState(subscribeState);
  const modalBtn = () =>{
    setModal(prev => !prev);
}
  const [modal,setModal] = useState(false);
const isSubscribe = useRecoilValue(subscribeState).subscribeState;
    const onClickSubscribeBtn = () =>{
        if(isSubscribe){
            // resetExampleState();
            setModal(true);
        }

  }
  return (
<Wrapper>
  <Img src={logo}></Img>
  {isSubscribe ? (
    <>
    <P>서비스를 구독해주셔서 감사합니다.</P>
    <H4>서비스 구독중</H4>
    <StyledButton onClick={onClickSubscribeBtn}>구독 해지하기</StyledButton>
    { modal&&<Modal onClickClose={modalBtn}></Modal>}
  </>
  ) : (
        <>
        <P>서비스를 구독하고, 더 다양한 소식을 받아보세요</P>
        <H4>월 9,900원으로 구독하기</H4>
        <Payment />
      </>
  )}
  <h5>이용 약관 확인하기</h5>
</Wrapper>
  );
};
export default Subscribe;