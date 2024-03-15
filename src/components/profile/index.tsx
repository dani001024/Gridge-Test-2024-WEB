import React,{useEffect, useState} from "react";
import { ProfileBox,Wrapper, H4,Container,Icon} from "./styles";
import { userProfile } from "../../apis/User";

interface UserProfile {
    id: number;
    loginId: string;
    realName: string;
    followerCount: number;
    followingCount: number;
    feedCount: number;
    // imageURL: string; // 프로필 이미지 URL
    // bio: string; // 프로필 설명
    // additionalInfo: string; // 기타 추가 정보
  }
const Profile = () => {
    const [profile, setProfile] = useState<UserProfile | null>(null);
    useEffect(() => {
        console.log('Component mounted');
        const fetchData = async () => {
          try {
            const response = await userProfile('melody123');
            console.log('성공', response.result);
            setProfile(response.result);
          } catch (error) {
            console.error('Error while signing in:', error);
            // 에러 처리 로직
          }
        };
    
        fetchData();
      }, []);
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
        <H4>게시물 {profile.feedCount}&nbsp;팔로워 {profile.followerCount}&nbsp;팔로잉 {profile.followingCount}</H4>
        {/* <H4>{profile.bio}</H4>
        <StyledPre>{profile.additionalInfo}</StyledPre> */}
      </ProfileBox>
    </Container>
  );
};
export default Profile;