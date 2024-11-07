import styled from "styled-components";

// Assets
import link from "@/assets/common/link.svg";
import play from "@/assets/common/play.svg";
import like from "@/assets/common/like.svg";



const PostCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 14px;
  padding: 24px;
  margin-bottom: 16px;
  max-width: 374px;
  width: 100%;
  background-color: ${props => props.theme.colors.white};
  cursor: pointer;
  height: 280px;
  .if-shared{
    width: 100%;
    display: flex;
    min-height: 24px;
    margin-bottom: 8px;
    font-weight: 600;
    .tag {
      span {
        background-color: ${props => props.theme.colors.seondary};
        border-radius: 6px;
        padding: 0 4px;
      }
    }
    .weblink{
      display: flex;
      align-items: center;
      img{
        margin-right: 3px;
      }
    }
  }
  h2{
    font-family: "Montserrat";
    font-size: 36px;
    font-weight: 400;
    margin-bottom: 44px;
  }
  .info{
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    .author{
      display: flex;
      align-items: center;
      img{
        border-radius: 50%;
        overflow: hidden;
        margin-right: 8px;
      } 
    }
    .share-link{
      color: ${props => props.theme.colors.accent};
      cursor: pointer;
    }
    .shared{
      .stats{
        display: flex;
        img{
          margin-right: 8px;
        }
        span {
          margin-right: 16px;
        }
        span:last-child{ 
          margin-right: 0;
        }
       }
    }
  }
`

interface PostCardProps {
  title: string;
  author: {
    name: string;
    pfp: string;
  }
  shared?: {
    isWebLink: boolean;
    tag?: string;
    watches: number;
    likes: number;
  }
}

const PostCard = ({title, author, shared}: PostCardProps) => {
  return (
    <PostCardWrapper className="shadow">
      <div className="if-shared">
        {shared?.watches && (shared?.isWebLink ? <div className="weblink"><img src={link} alt="weblink" /><p>Shared via weblink</p></div> 
        : <div className="tag"><p>Shared to <span className="hashtag">#{shared?.tag}</span></p></div>)
        }
      </div>
      <h2>{title}</h2>
      <div className="info">
        <div className="author">
          <img src={author.pfp} alt="profile" />
          <h6>{author.name}</h6>
        </div>
        
        <div className="shared">
          {shared?.watches ? 
          <div className="stats">
            <img src={play} alt="" />
            <span>{shared?.watches}</span>
            <img src={like} alt="" />
            <span>{shared?.likes}</span>
          </div> : 
          <span className="share-link">Share</span>}
        </div>
      </div>
    </PostCardWrapper>
  )
};

export default PostCard
