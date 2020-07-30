import React from "react";
import styled from "styled-components";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { Icon } from "react-icons-kit";
import { bell } from "react-icons-kit/feather/bell";
import { home } from "react-icons-kit/feather/home";
import { user } from "react-icons-kit/feather/user";
import { bookmark } from "react-icons-kit/feather/bookmark";

const SideBarBox = styled.div`
  border: 2px solid black;
  height: 100vh;
  width: 15vw;
  float: left;
`;

const SideBarMain = styled.div`
  div {
    border: 2px orange solid;
  }
  svg {
    width: 50px;
    height: 50px;
  }
`;

const Cat = styled.div`
  padding: 10px;
  border: 2px purple dashed;
`;

const SideBar = () => {
  return (
    <SideBarBox>
      <Cat>
        <Logo />
      </Cat>
      <SideBarMain>
        <div>
          <Icon size={50} icon={home} />
          Home
        </div>
        <div>
          <Icon icon={user} />
          Profile
        </div>
        <div>
          <Icon icon={bell} />
          Notifications
        </div>
        <div>
          <Icon icon={bookmark} />
          Bookmark
        </div>
      </SideBarMain>
    </SideBarBox>
  );
};

export default SideBar;
