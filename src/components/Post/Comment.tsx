import React, { useEffect, useState } from "react";
import { fetchComments,postComment } from "../../apis/Feed";
// import Sidebar from "../Sidebar";
import { CommentBox,CommentRow, Input, InputWrapper,CommentList } from "./styles";
import sample from "../../assets/sample_profile.jpg"

export interface Comment {
  id: number;
  writeUserLoginId: string;
  commentText: string;
}
interface CommentProps {
  feedId: number,
  showMoreComment : boolean,
  numberOfCommentsHandle : (num:number)=>void
}

const Comment = ({ feedId ,showMoreComment,numberOfCommentsHandle}: CommentProps) => {
  const [comment, setComment] = useState<Comment[]>([]);
  const [reply, setReply] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setReply(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      const response = await postComment(feedId,reply);
      console.log(response);
    } catch (error) {
      console.error("Error while signing in:", error);
      // 에러 처리 로직
    }
    // 댓글 입력창 비우기
    setReply("");
  };
  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSubmit();
    }
  };


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchComments(1, feedId);
        setComment(comment.concat(response.result.commentList));
        // console.log(response.result.commentList.length)
        numberOfCommentsHandle(response.result.commentList.length)
      } catch (error) {
        console.error("Error while signing in:", error);
        // 에러 처리 로직
      }
    };

    fetchData();
  }, []);

  if (!comment) {
    return <div>Loading...</div>;
  }

  return (
    <CommentBox showMore={showMoreComment}>
        <CommentList>
      {comment.map((commentList: Comment) => (
        <CommentRow key={commentList.id}>
          {commentList.writeUserLoginId} {commentList.commentText}
        </CommentRow>
      ))}
      </CommentList>
      <hr/>
      <InputWrapper>
        <img src={sample}/>
        <Input         type="text"
        placeholder="댓글달기..."
        value={reply}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress} />
        <button onClick={handleSubmit}>게시</button>
      </InputWrapper>
    </CommentBox>
  );
};

export default Comment;
