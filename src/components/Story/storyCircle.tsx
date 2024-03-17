import React from "react";
import { Ellipse,Img } from "./styles";
// import example from "../../assets/example.png"

interface propsType {
    id : string,
    imageUrl : string
}
const StoryCircle = (props:propsType)=>{
    const {id,imageUrl} = props
    console.log(id);
    return(
        <>
        <Ellipse>
            <Img src={imageUrl}></Img>
        </Ellipse>
        </>
    )
}
export default StoryCircle;