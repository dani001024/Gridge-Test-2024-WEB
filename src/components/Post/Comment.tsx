import React, { useEffect, useState } from "react";
import { fetchComments } from "../../apis/Feed";
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchComments(1, feedId);
        setComment(comment.concat(response.result.commentList));
        console.log(response.result.commentList.length)
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
        <Input placeholder="댓글달기..." />
        <button>게시</button>
      </InputWrapper>
    </CommentBox>
  );
};

export default Comment;
