import React, { useState } from 'react';
import { Wrapper, ImageContainer,Image,Left,Right,PageIndicator,PageDot} from './styles';

interface Props {
  images: string[];
}


import { FaChevronCircleLeft,FaChevronCircleRight} from "react-icons/fa";

const ImageSlider: React.FC<Props> = ({ images }) => {
    const [selected, setSelected] = useState<number>(1);
    const length: number = images.length;
  
    const next = (): void => {
      setSelected(selected === length ? 1 : selected + 1);
      console.log(selected);
    };
  
    const pre = (): void => {
      setSelected(selected === 1 ? length : selected - 1);
      console.log(selected);
    };
    const handleDotClick = (index: number): void => {
        setSelected(index + 1);
      };
  
    return (
      <>
        <Wrapper>
          <Left onClick={pre} className={selected === 1 ? "hidden" : ""}>
            <FaChevronCircleLeft />
          </Left>
          <ImageContainer
            style={{ transform: `translate(-${(selected - 1) * 520}px, 0px)` }}
          >
            {images.map((image, index) => (
              <Image key={index} style={{ backgroundImage: `url(${image})` }} />
            ))}
          </ImageContainer>
          <Right onClick={next} className={selected === length ? "hidden" : ""}>
            <FaChevronCircleRight />
          </Right>
        </Wrapper>
        <PageIndicator>
          {images.map((_, index) => (
            <PageDot
              key={index}
              isSelected={index + 1 === selected}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </PageIndicator>
      </>
    );
  };
  export default ImageSlider;