import React from "react";
import StoryCircle from "./storyCircle";
import { StoryWrapper } from "./styles";
import example from "../../assets/example.png"

const dummyData = [
    { loginId: '1', imageUrl: example },
    { loginId: '2', imageUrl: example },
    { loginId: '3', imageUrl: example },
    { loginId: '4', imageUrl: example },
    { loginId: '5', imageUrl: example },
    { loginId: '6', imageUrl: example },
    { loginId: '7', imageUrl: example },
    { loginId: '8', imageUrl: example },
    { loginId: '9', imageUrl: example },
    { loginId: '10', imageUrl: example },
    { loginId: '11', imageUrl: example },
    { loginId: '12', imageUrl: example },
];

const Story = ()=>{

    return (
      <StoryWrapper>
          {dummyData.map((data) => (
            <StoryCircle
              key={data.loginId}
              id={data.loginId}
              imageUrl={data.imageUrl}
            />
          ))}
      </StoryWrapper>
    );
}
export default Story;