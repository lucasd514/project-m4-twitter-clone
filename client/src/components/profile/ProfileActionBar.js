import React, { useContext } from "react";
import styled from "styled-components";
import { Icon } from "react-icons-kit";
import { messageSquare } from "react-icons-kit/feather/messageSquare";
import { repeat } from "react-icons-kit/feather/repeat";
import { heart } from "react-icons-kit/feather/heart";
import { upload } from "react-icons-kit/feather/upload";

const profileActionBar = (props) => {
  console.log("this is my prop in AB", props);

  const ActionBox = styled.div`
    display: flex;
    border-bottom: 1px solid;
    margin-bottom: 2px;
  `;
  const ActionBarIcons = styled.button`
    display: block;
    margin-left: 30px;
    padding-left: 10px;
    border: none;
    background: transparent;
    cursor: pointer;
    text-align: left;
    &:active {
      color: inherit;
    }
  `;

  return (
    <ActionBox>
      <ActionBarIcons>
        <Icon icon={messageSquare} />
      </ActionBarIcons>
      <ActionBarIcons>
        <Icon icon={repeat} />
      </ActionBarIcons>
      <ActionBarIcons>
        <Icon icon={heart} />
      </ActionBarIcons>
      <ActionBarIcons>
        <Icon icon={upload} />
      </ActionBarIcons>
    </ActionBox>
  );
};

export default profileActionBar;
