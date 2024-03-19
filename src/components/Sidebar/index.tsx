import React,{useEffect,useState} from "react";
import { ProfileBox,P,H3,Wrap,H5,H4,StyledButton,Container} from "./styles";
import * as S from './styles';
import example from "../../assets/example.png"
import sample from "../../assets/sample_profile.jpg"
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

const AppSidebar = () => {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  useEffect(() => {
      console.log('Component mounted');
      const fetchData = async () => {
        try {
          const response = await userProfile('melody123');
          console.log('사이드바', profile);
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
      <ProfileBox>
        <S.Img src={sample} />
        <div>
          <H3>loginId</H3>
          <P>소개</P>
        </div>
      </ProfileBox>
      <Wrap>
        <H4>회원님을 위한 추천</H4>
        <S.MoreButton>모두 보기</S.MoreButton>
      </Wrap>
      <Wrap>
        <div>
          <img src={example} />
          <H5>loginId1</H5>
        </div>
        <StyledButton>팔로우</StyledButton>
      </Wrap>
      <Wrap>
        <div>
          <img src={example} />
          <H5>loginId1</H5>
        </div>
        <StyledButton>팔로우</StyledButton>
      </Wrap>
      <Wrap>
        <div>
          <img src={example} />
          <H5>loginId1</H5>
        </div>
        <StyledButton>팔로우</StyledButton>
      </Wrap>
      <Wrap>
        <div>
          <img src={example} />
          <H5>loginId1</H5>
        </div>
        <StyledButton>팔로우</StyledButton>
      </Wrap>
    </Container>
  );
};

export default React.memo(AppSidebar);

