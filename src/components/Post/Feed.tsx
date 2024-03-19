import React, { useEffect, useState } from "react";
import { feedInquiry } from "../../apis/Feed";
import Post from ".";
import { PostConstainer } from "./styles";

interface Content {
    id: number;
    contentUrl: string;
  }

  export interface Feed {
    id: number;
    feedLoginId: string;
    feedText: string;
    createdAt: string;
    updatedAt: string;
    feedCommentCount: number;
    isLiked: boolean;
    isBookMarked: boolean;
    contentList: Content[]|Content;
  }

  const Feed = () => {
    const [posts, setPosts] = useState<Feed[]>([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await feedInquiry(1);
          setPosts(posts.concat(response.result.feedList));
        } catch (error) {
          console.error("Error while signing in:", error);
          // 에러 처리 로직
        }
      };
  
      fetchData();
    }, []);
  
    useEffect(() => {
      console.log("포스트:", posts);
    }, [posts]);
  
    if (!posts) {
      return <div>Loading...</div>;
    }
  
    return (
      <>
        {posts.map((feed: Feed) => (
          <PostConstainer>
            <Post key={feed.id} feed={feed} />
          </PostConstainer>
        ))}
      </>
    );
  };
  
  export default Feed;