// Assets
import gift from "@/assets/nav/icons/gift.svg";
import medium from "@/assets/nav/icons/medium.svg";
import notification from "@/assets/nav/icons/notifications.svg";
import styled from "styled-components";

const NavWrapper = styled.ul`
  display: flex;
  cursor: pointer;
`;

const Nav = () => {
  return (
    <NavWrapper>
      <li>
        <img src={notification} alt="notification" />
      </li>
      <li>
        <img src={gift} alt="gift" />
      </li>
      <li>
        <img src={medium} alt="medium" />
      </li>
    </NavWrapper>
  )
};

export default Nav
