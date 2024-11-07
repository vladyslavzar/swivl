import DropDown from "@/components/DropDown";
import styled from "styled-components";

interface ProfileProps {
  name: string;
  pfp: string;
}

const ProfileWrapper = styled.div`
  display: flex; 
  align-items: center;
  cursor: pointer;
  .profile_picture{
    border-radius: 50%;
    overflow: hidden;
    margin: 0 12px 0 20px;
    height: 32px;
  }
`

const Profile = ({name, pfp}: ProfileProps) => {
  return (
    <ProfileWrapper>
      <h6 className="shadow">{name}</h6>
      <div className="profile_picture">
        <img src={pfp} alt="profile" className="shadow" />
      </div>
      <DropDown />
    </ProfileWrapper>
  )
};

export default Profile
