import styled from 'styled-components';

// Assets
import dots from '@/assets/common/dots.svg';
import report from '@/assets/common/report.svg';
import block from '@/assets/common/block.svg';
import { useState } from 'react';

interface DotMenuWrapperProps {
  showMenu: boolean;
}

const DotMenuWrapper = styled.button<DotMenuWrapperProps>`
  width: 16px;
  height: 16px;
  cursor: pointer;
  position: relative;
  .menu {
    display: ${props => props.showMenu ? 'block' : 'none'};
    position: absolute;
    z-index: 4;
    top: 36px;
    right: 0;
    background-color: ${props => props.theme.colors.white};
    border-radius: 8px;
    width: 176px;
    height: 124px;
    padding: 24px 0;
    transform: translate(90%);
    ul {
      li {
        display: flex;
        align-items: center;
        cursor: pointer;
        padding: 9px 24px;
        transition: background-color 0.3s;
        font-weight: 600;
        &:hover {
          background-color: #F5F5F5;
        }
        img {
          margin-right: 16px;
        }
        span {
          font-size: 14px;
          line-height: 16px;
        }
      }
    }
  }
`

const DotMenu = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <DotMenuWrapper className="dots__menu" showMenu={showMenu} onClick={(e) => {
      e.stopPropagation();
      setShowMenu(showMenu => !showMenu);
    }}>
      <img src={dots} alt="dots" className="shadow" />
      <div className="menu shadow">
        <ul>
          <li><img src={report} alt="report" /><span>Report User</span></li>
          <li><img src={block} alt="block" /><span>Block User</span></li>
        </ul>
      </div>
    </DotMenuWrapper>
  )
};

export default DotMenu
