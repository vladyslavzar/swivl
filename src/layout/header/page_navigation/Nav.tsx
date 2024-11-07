import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavWrapper = styled.ul`
  display: flex;
  max-width: 261px;
  li{
    margin-right: 36.5px;
    position: relative;
    a{
      text-transform: uppercase;
      padding-bottom: 19px;
      border-bottom: 4px solid transparent;
      display: inline-block;
    }
    a.active{
      &::after{
        content: '';
        position: absolute;
        width: 100%;
        height: 4px;
        background: linear-gradient(to bottom right, #FF974F, #E32C75);
        bottom: -4px;
        left: 0;
        } 
    }
  }

`


const Nav = () => {
  return (
    <NavWrapper>
      <li>
        <NavLink to="/" className="shadow">Feed</NavLink>
      </li>
      <li>
        <NavLink to="/explore" className="shadow">Explore</NavLink>
      </li>
      <li>
        <NavLink to="/discussions" className="shadow">Discussions</NavLink>
      </li>
    </NavWrapper>
  )
};

export default Nav
