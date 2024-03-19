import React, { useEffect, useState } from "react";
import { feedInquiry } from "../../apis/Feed";
import Post from ".";
import { PostConstainer } from "./styles";
import  {bookMarkedFeedInquiry,likedFeedInquiry} from "../../apis/User"
import { useLocation  } from "react-router-dom";

export interface Content {
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
    const location = useLocation();
    useEffect(() => {
      const fetchData = async () => {
        try {
          let response;
          if (location.pathname === "/bookmarked") {
            response = await bookMarkedFeedInquiry(1);
            console.log(location.pathname)
          } else if (location.pathname === "/likedFeed") {
            response = await likedFeedInquiry(1);
          } else {
            response = await feedInquiry(1);
            console.log("path",location.pathname)
            setPosts(response.result.feedList);
          }
          
        } catch (error) {
          console.error("Error while fetching data:", error);
          // 에러 처리 로직
        }
      };
  
      fetchData();
    }, [location.pathname]);
  
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