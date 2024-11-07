import styled from "styled-components";
import add from "@/assets/nav/add.png";

const AddWrapper = styled.div`
  position: absolute;
  height: 64px;
  width: 64px;
  cursor: pointer;
  right: 0;
  bottom: -32px;
`;

const Add = () => {
  return (
    <AddWrapper>
      <img src={add} alt="add" className="shadow" />
    </AddWrapper>
  )
};

export default Add
