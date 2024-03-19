import React,{useState} from "react";
import { Constainer, ImgWrapper,Img,Wrap,Span } from "./styles";
import sample from "../../assets/sample_profile.jpg"
import ImageSlider from "../ImageSliber/index";
import Sheet from "./Sheet";
import { Feed } from "./Feed";
import ContentText from "./ContentText";
import Comment from "./Comment";

interface PostProps {
    feed: Feed;
  }
  
  const Post: React.FC<PostProps> = ({ feed }) => {
    const contentList = Array.isArray(feed.contentList) ? feed.contentList : [feed.contentList];
    const [showMore, setShowMore] = useState<boolean>(false);
    const [showMoreComment, setShowMoreComment] = useState<boolean>(false);
    const [numberOfComments,setnumberOfComments] = useState<number>(0);
    const toggleShowMore = () => {
        setShowMore((prev) => !prev);
        // 더보기 누르면 오른쪽에 전체글 렌더링.. 
      };
    const toggleShowMoreComment = () => {
        setShowMoreComment((prev) => !prev);
        // 더보기 누르면 오른쪽에 전체글 렌더링.. 
      };
    const numberOfCommentsHandle = (num:number) => {
        setnumberOfComments(num);
        // 더보기 누르면 오른쪽에 전체글 렌더링.. 
      };
    return (
      <>
        <Constainer>
          <ImgWrapper>
            <Wrap>
              <Img src={sample} alt="profile" />
              <p>{feed.feedLoginId}</p>
            </Wrap>

            <ImageSlider
              images={contentList.map((content) => content.contentUrl)}
            />
          </ImgWrapper>
          <Sheet
            isLiked={feed.isLiked}
            isBookMarked={feed.isBookMarked}
            feedText={feed.feedText}
            feedId={feed.id}
            feedLoginId={feed.feedLoginId}
            onclick={toggleShowMore}
            onClickComment={toggleShowMoreComment}
            showMore={showMore}
            numberOfComments={numberOfComments}
          />
        </Constainer>
        <Span>
          <Comment feedId={feed.id}  showMoreComment={showMoreComment} numberOfCommentsHandle={numberOfCommentsHandle}/>
          <ContentText
            feedText={feed.feedText}
            feedLoginId={feed.feedLoginId}
            showMore={showMore}
          />
        </Span>
      </>
    );
  };
export default Post;
