import DotMenu from "@/components/DotMenu";
import Switch from "@/components/Switch";
import PostCard from "@/components/PostCard";
import styled from "styled-components";

// Assets
import edit from "@/assets/common/edit.svg";
import defaultPfp from "@/assets/profile/default_pfp.svg";


const ProfileWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  .profile{
    max-width: 330px;
    margin-bottom: 64px;
    &__top{
      display: flex;
      justify-content: space-between;
      margin-bottom: 32px;
      .pfp{
          border-radius: 50%;
          overflow: hidden;
          height: 120px;
          min-width: 120px;
          display: block;
          margin-right: 24px;
          img{
            width: 120px;
            height: 100%;
            display: block;
          }
      }
      &__info{
        margin-right: 25px;
        h4{
          font-family: "Montserrat";
          font-size: 24px;
          line-height: 26px;
          margin-bottom: 8px;
          display:inline-block;
        }
        p{
          cursor: pointer;
          margin-bottom: 16px;
          display:inline-block;
        }
        &__edit{
          display: flex;
          align-items: center;
          cursor: pointer;
          img{
            margin-right: 8px;
          }
          span{
            color: ${props => props.theme.colors.accent};
            text-decoration: underline;
          }
        }
      }
    }
    &__bottom{
      &__stats{
        display: flex;
        justify-content: space-between;
        margin-bottom: 16px;
        &__item{
          display: inline-flex;
          flex-direction: column;
          align-items: center;
          h6{
            font-size: 14px;
            line-height: 16px;
            color: #A5A5A5;
            display:inline-block;
            font-weight: 400;
          }
          p{
            font-size: 16px;
            line-height: 18px;
            display:inline-block;
            font-weight: bold;
          }
        }
      }
    }      
  }
  .posts{
    width: 100%;
    max-width: 772px;
    margin-left: 24px;
    &__switch{
      display: flex;
      justify-content: space-between;
      margin-bottom: 62px;
      max-width: 202px;
    }
    &__grid{
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 24px;
  }
  
`


interface ProfileProps {
  name: string;
  pfp: string;
  synths: number;
  followers: number;
  following: number;
  descr: string;
  username: string;
}

const Profile = ({name, pfp, synths, followers, following, descr, username}: ProfileProps) => {
  return (
    <ProfileWrapper className="feed-item">
      <div className="profile">
        <div className="profile__top">
          <div className="pfp">
            <img src={pfp} alt="profile" className="shadow" />
          </div>
          <div className="profile__top__info">
            <h4 className="shadow">{name}</h4>
            <p className="shadow">{`@${username}`}</p>
            <div className="profile__top__info__edit">
              <img src={edit} alt="edit" className="shadow" />
              <span className="shadow">Edit Profile</span>
            </div>
          </div>
          <DotMenu/>
        </div>
        <div className="profile__bottom">
          <div className="profile__bottom__stats">
            <div className="profile__bottom__stats__item">
              <p>{synths}</p>
              <h6>synths</h6>
            </div>
            <div className="profile__bottom__stats__item">
              <p>{followers}</p>
              <h6>followers</h6>
            </div>
            <div className="profile__bottom__stats__item">
              <p>{following}</p>
              <h6>following</h6>
            </div>
          </div>
          <div className="profile__bottom__descr shadow">
            <p>{descr}</p>
          </div>
        </div>
      </div>
      <div className="posts">
        <div className="posts__switch">
          <h3>Public</h3>
          <Switch/>
          <h3>Private</h3>
        </div>
        <div className="posts__grid">
          <PostCard title="New air routes that promise cheap flights in" author={{name: "Gregory Watkins", pfp: defaultPfp}} />
          <PostCard title="New air routes that promise cheap flights in" author={{name: "Gregory Watkins", pfp: defaultPfp}}/>
          <PostCard title="New air routes that promise cheap flights in" author={{name: "Gregory Watkins", pfp: defaultPfp}} shared={{isWebLink: false, tag: 'discussionaboutanimgttdds…', watches: 88, likes: 24}}/>
          <PostCard title="New air routes that promise cheap flights in" author={{name: "Gregory Watkins", pfp: defaultPfp}} shared={{isWebLink: true, watches: 88, likes: 24}}/>
        </div>
      </div>
    </ProfileWrapper>
  )
};

export default Profile
