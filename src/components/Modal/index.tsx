import React from "react";
import { Container,H4,H5,StyledModal,P,Box } from "./styles"
import { useRecoilValue,useResetRecoilState  } from "recoil";
import { subscribeState } from "../../recoil/subscribe";
interface PropsType {
    onClickClose: () => void;
}
const Modal = (props:PropsType)=>{
    const{onClickClose} = props;
    const resetExampleState = useResetRecoilState(subscribeState);
    const isSubscribe = useRecoilValue(subscribeState).subscribeState;
    const handleCancel =()=>{
      resetExampleState();
      onClickClose();
    }
    return (
      <Container>
        <StyledModal>
          {!isSubscribe ? (
            <>
              <H4>결제 처리가 진행되지 않았습니다.</H4>
              <H5>결제를 다시 시도해주세요.</H5>
              <Box>
                <P onClick={onClickClose}>확인</P>
              </Box>
            </>
          ) : (
            <>
              <H4>앗! 정말 구독을 취소하실 건가요?</H4>
              <H5>확인 버튼을 누르면, 구독이 종료됩니다.</H5>
              <Box>
                <P className="custom" onClick={handleCancel}>확인</P>
                <P onClick={onClickClose}>취소</P>
              </Box>
            </>
          )}
        </StyledModal>
      </Container>
    );
}
export default Modal;