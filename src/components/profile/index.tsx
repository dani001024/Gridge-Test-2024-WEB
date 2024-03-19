import React,{useEffect, useState} from "react";
import { ProfileBox,Wrapper, H4,Container,Icon} from "./styles";
import { userProfile } from "../../apis/User";
import { useLocation } from "react-router-dom";

interface UserProfile {
    id: number;
    loginId: string;
    realName: string;
    followerCount: number;
    followingCount: number;
    feedCount: number;
  }
const Profile = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const loginId = searchParams.get('loginId');
    const [profile, setProfile] = useState<UserProfile | null>(null);
    useEffect(() => {
      console.log(loginId);
      
      if (loginId) { // loginId가 정의되어 있는 경우에만 요청 보냄
        const fetchData = async () => {
          try {
            const response = await userProfile(loginId);
            console.log('성공', response.result);
            setProfile(response.result);
          } catch (error) {
            console.error('Error while signing in:', error);
            // 에러 처리 로직
          }
        };
    
        fetchData();
      }
    }, [loginId]); 
      if (!profile) {
        return <div>Loading...</div>;
      }
    
  return (
    <Container>
      <Icon />
      <ProfileBox>
        <Wrapper>
          <h1>{profile.loginId}</h1>
          <button>프로필 편집</button>
        </Wrapper>
        <H4>게시물 {profile.feedCount}&nbsp;팔로워 {profile.followingCount}&nbsp;팔로잉 {profile.followerCount}</H4>
        {/* <H4>{profile.bio}</H4>
        <StyledPre>{profile.additionalInfo}</StyledPre> */}
      </ProfileBox>
    </Container>
  );
};
export default Profile;