import React, { useEffect } from "react";
import { Box,Img } from "./styles";
import checkbox from "../../assets/checkbox.png"
import checkedbox from "../../assets/checkedbox.png"
import { useRecoilState, useSetRecoilState, useRecoilValue,useResetRecoilState } from "recoil";
import { termsOfService,allAgreementsState  } from "../../recoil/singup";
import { Link } from "react-router-dom";

interface Props {
    name :string,
    link :string,
    text:string
}

const Agree = (props:Props) => {
    const { name, link, text } = props;
    const [isChecked, setIsChecked] = useRecoilState(termsOfService);
    const setAllAgreements = useSetRecoilState(termsOfService);
    const allAgreements = useRecoilValue(allAgreementsState);
    const resetCounter = useResetRecoilState(termsOfService);

    const handleCheck = () => {
        setIsChecked((prev) => ({
            ...prev,
            [name]: !prev[name],
        }));
        if (name === 'all' && !isChecked['all']) {
            // 나머지 모든 항목을 true로 설정
            setAllAgreements({
                all: true,
                termsOfUse: true,
                dataPolicy: true,
                locationBased: true,
            });
        } else if (name == 'all' && isChecked['all']) {
            resetCounter();
        } 
    };

    useEffect(() => {
        if (allAgreements) {
            setAllAgreements((prev) => ({
                ...prev,
                all: true,
            }));
        } else {
            setAllAgreements((prev) => ({
                ...prev,
                all: false,
            }));
        }
    }, [allAgreements, setAllAgreements]);
  return (
    <>
      <Box>
        <div>
          <h3>{text}</h3>
          {name!=='all'&&<Link to={link}>더 알아보기</Link>}
        </div>
        <Img src={isChecked[name] ?checkedbox : checkbox} alt="checkbox" onClick={handleCheck}></Img>
      </Box>
    </>
  );
};
export default Agree;
