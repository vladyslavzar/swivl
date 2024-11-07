import styled from "styled-components";
import Profile from "./profile/Profile";
import ProfileNav from "./profile/Nav";
import Nav from "./page_navigation/Nav";
import Add from "./add/Add";

// Assets
import logo from "@/assets/logo.svg";



const HeaderWrapper = styled.header`
  background-color: ${props => props.theme.colors.white};
  width: 100%;
  min-height: 112px;
  padding-top: 24px;
  margin-bottom: 72px;
  .header__main{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 18px;
    &__nav{
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      justify-content: flex-end;
      margin-left: 24px;
      ul{
       margin-left: 17px;
      }
    }
  }
  .header__pages{
    position: relative;
  }
`

interface HeaderProps {
  name: string;
  pfp: string;
}

const Header = ({name, pfp}: HeaderProps) => {
  return (
    <HeaderWrapper className="header shadow">
      <div className="container">
        <div className="header__main">
          <div className="header__main__logo">
            <img src={logo} alt="logo" className="shadow" />
          </div>
          <nav className="header__main__nav">
            <Profile name={name} pfp={pfp}/>
            <ProfileNav />
          </nav>
        </div>
        <div className="header__pages">
          <nav className="header__pages__nav">
            <Nav/>
          </nav>
          <Add/>
        </div>
      </div>
    </HeaderWrapper>
  )
};

export default Header
