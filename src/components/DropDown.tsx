import styled from 'styled-components';
import dropDown from '@/assets/nav/icons/drop_down.svg';
import { useState } from 'react';

interface DropDownWrapperProps {
  toggleDrop: boolean;
}

const DropDownWrapper = styled.button<DropDownWrapperProps>`
  cursor: pointer;
  img{
    height: 16px;
    width: 16px;
    display: block;
    transition: transform 0.3s;
    transform: ${props => props.toggleDrop ? 'rotate(180deg)' : 'rotate(0deg)'};
  }
`

const DropDown = () => {
  const [toggleDrop, setToggleDrop] = useState(false);

  return (
    <DropDownWrapper className="drop-down" toggleDrop={toggleDrop} onClick={() => setToggleDrop(toggleDrop => !toggleDrop)}>
      <img src={dropDown} alt="drop down" className="shadow" />
    </DropDownWrapper>
  )
};

export default DropDown
