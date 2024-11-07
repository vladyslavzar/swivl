import styled from "styled-components";
import Profile from "./profile/Profile";
import avatar from "@/assets/profile/avatar.jpg";

const MainWrapper = styled.main`
  @media (max-width: 1180px){
    .profile {
      max-width: 550px;
    }
    .feed-item{
      justify-content: center;
    }
    .menu {
      transform: none;
    }
  }
  @media (max-width: 852px){
    .posts__switch{
      margin-left: auto;
      margin-right: auto;
    }
    .posts__grid {
      grid-template-columns: 1fr;
      justify-items: center;
    }
  }
`;

const Main = () => {

  return (
    <MainWrapper className="main">
      <div className="container">
        <Profile name={"Benjamin Clementine"} pfp={avatar} synths={45} followers={110} following={322} descr={"Cryptocurrencies including Ethereum, Ripple, and Litecoin have all plunged between 20 to 30 percent each, according to CoinMarketCap. Here is the latest Ripple price news and live updates on XRP, bitcoin and Ethereum."} username={"benclementine"}/>
      </div>
    </MainWrapper>
  )
};

export default Main
