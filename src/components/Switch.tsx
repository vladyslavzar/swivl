import { useState } from "react";
import styled from "styled-components";

interface SwitchWrapperProps {
  checked: boolean;
}

const SwitchWrapper = styled.label<SwitchWrapperProps>`
  position: relative;
  display: inline-block;
  width: 40px;
  height: 24px;
  input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${props => props.checked ? '#ED5267' : "#ccc"};
    -webkit-transition: .4s;
    transition: .4s;
    border-radius: 34px;
  }
  .slider:before {
    position: absolute;
    content: "";
    height: 18px;
    width: 18px;
    left: 3.5px;
    bottom: 3.5px;
    background-color: ${props => props.theme.colors.white};
    -webkit-transition: .4s;
    transition: .4s;
    border-radius: 50%;
  }
  ${props => props.checked && `
    .slider:before {

    -webkit-transform: translateX(16px);
    -ms-transform: translateX(16px);
    transform: translateX(16px);
  }
  `}
  
  .slider.round {
    border-radius: 34px;
  }
  .slider.round:before {
    border-radius: 50%;
  }
  `


const Switch = () => {
  const [checked, setChecked] = useState(false);

  return (
    <SwitchWrapper className="switch shadow" checked={checked as boolean}>
      <input type="checkbox" checked={checked} onChange={() => setChecked(checked => !checked)}/>
      <span className="slider round"></span>
    </SwitchWrapper>
  )
};

export default Switch
