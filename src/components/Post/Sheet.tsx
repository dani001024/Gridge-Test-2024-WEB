import React, { useState } from "react";
import { Reaction, Row,StyledMoreBtn } from "./styles";
import { AiOutlineHeart,AiFillHeart  } from "react-icons/ai";
import { LuMessageCircle } from "react-icons/lu";
import { IoBookmarkOutline,IoBookmark  } from "react-icons/io5";
import { feedBookmarked, feedLike } from "../../apis/Feed";

interface Props {
    isLiked: boolean,
    isBookMarked :boolean,
    feedText:string,
    feedId : number,
    feedLoginId:string,
    onclick : ()=>void,
    onClickComment :()=>void,
    showMore:boolean,
    numberOfComments:number
  }
  
  const Sheet: React.FC<Props> = ({ isLiked, isBookMarked, feedText,feedId ,feedLoginId,onclick,onClickComment,numberOfComments}) => {
    const [feedLikeResponse, setFeedLikeResponse] = useState<boolean>(isLiked);
    const [feedBookMarkedResponse, setIsMarked] = useState<boolean>(isBookMarked);
    // const [showMore, setShowMore] = useState(false);
    const onclickLike = async () => {
      console.log(isBookMarked, feedText, isLiked);
      try {
        const response = await feedLike(feedId);
        setFeedLikeResponse(response.isLiked);
      } catch (error) {
        console.error("Error while signing in:", error);
      }
    };
    const onclickMark = async () => {
      setIsMarked((prev) => !prev);
      try {
        const response = await feedBookmarked(feedId);
        setFeedLikeResponse(response.isBookMarked);
      } catch (error) {
        console.error("Error while signing in:", error);
      }
    };

    const renderFeedText = () => {
      const maxLength = 100;
      if (feedLoginId.length + feedText.length > maxLength ) {
        return (
          <>
            {feedLoginId+feedText.substring(0, maxLength-feedLoginId.length)}
            <StyledMoreBtn onClick={onclick}>...더보기</StyledMoreBtn>
          </>
        );
      }
      return feedText;
    };

    return (
      <>
        <Row>
          <Reaction>
            {feedLikeResponse ? <AiFillHeart className="fill" onClick={onclickLike} /> : <AiOutlineHeart onClick={onclickLike}/>}
            <LuMessageCircle />
          </Reaction>
          {feedBookMarkedResponse ? <IoBookmark onClick={onclickMark}/> : <IoBookmarkOutline onClick={onclickMark}/>}
        </Row>
        <p>좋아요 100개</p>
        <div>
              {renderFeedText()}
              <p onClick={onClickComment}>댓글{numberOfComments}개 모두보기</p>
        </div>
      </>
    );
}
export default Sheet;