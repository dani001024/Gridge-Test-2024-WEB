//아임포트
import React, { useEffect, useState } from 'react';
import { RequestPayParams,RequestPayResponse } from './portone';
import Button from '../Button/index';
import Modal from '../Modal';
import { useSetRecoilState,useRecoilValue } from 'recoil';
import { subscribeState } from '../../recoil/subscribe';


const Payment = () => {
    const content = useRecoilValue(subscribeState);
    const setSubscribeState = useSetRecoilState(subscribeState);
    const [modal,setModal] = useState(false);
    const modalBtn = () =>{
        setModal(prev => !prev);
    }
    const successPayment = () =>{
        setSubscribeState({ subscribeState: true })

    }
    if (!window.IMP) return(<></>);
    const { IMP } = window;
    useEffect(()=>{
        IMP.init("imp01226172"); // 가맹점 식별코드
    },[])
    const onClickPayment = () => {
    
        /* 2. 결제 데이터 정의하기 */
        const data: RequestPayParams = {
          pg: 'kakaopay.TC0ONETIME', // PG사 : https://developers.portone.io/docs/ko/tip/pg-2 참고
          pay_method: "card", // 결제수단
          merchant_uid: `mid_${new Date().getTime()}`, // 주문번호
          amount: 1, // 결제금액
          name: "아임포트 결제 데이터 분석", // 주문명
          buyer_name: "홍길동", // 구매자 이름
          buyer_tel: "01012341234", // 구매자 전화번호
          buyer_email: "example@example.com", // 구매자 이메일
          buyer_addr: "신사동 661-16", // 구매자 주소
          buyer_postcode: "06018", // 구매자 우편번호
          customer_uid : "" //빌링키
        };
    
        /* 4. 결제 창 호출하기 */
        IMP.request_pay(data, callback);
      };
    
      /* 3. 콜백 함수 정의하기 */
      function callback(response: RequestPayResponse) {
        const { success, error_msg } = response;
        console.log(response);
        if (success) {
          alert("결제 성공");
          successPayment();
          //결제성공 api?
          console.log("상태바뀜",content);
        } else {
        //   /alert(`결제 실패: ${error_msg}`);
        console.log(error_msg);
          setModal(true);
        }
      }
    
      return (
        <>
         <Button isActive={true} onClick={onClickPayment}>바로 구독 신청하기</Button>
        { modal&&<Modal onClickClose={modalBtn}></Modal>}
        </>
      );
  };
  
  export default Payment;