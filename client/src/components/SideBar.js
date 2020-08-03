import React from "react";
import styled from "styled-components";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { Link, NavLink } from "react-router-dom";
import { Icon } from "react-icons-kit";
import { bell } from "react-icons-kit/feather/bell";
import { home } from "react-icons-kit/feather/home";
import { user } from "react-icons-kit/feather/user";
import { bookmark } from "react-icons-kit/feather/bookmark";

const SideBarBox = styled.div`
  border: 2px solid black;
  height: 100vh;
  width: 200px;
  float: left;
`;

const SideBarMain = styled.div`
  position: absolute;
  div {
    border: 2px orange solid;
    width: 175px;
    margin-left: 10px;
    margin-right: 10px;
    padding: 3px;
    :hover {
      border-radius: 15px;
      background-color: rgb(240, 188, 66);
      cursor: pointer;
    }
  }
  svg {
    width: 50px;
    height: 50px;
    padding-left: 20px;
  }
  a {
    text-decoration: none;
  }
`;

const Cat = styled.div`
  padding: 10px;
  border: 2px purple dashed;
`;
const MeowButton = styled.button`
  border-radius: 25px;
  background-color: rgb(240, 188, 66);
  width: 175px;
  margin-top: 10px;
  margin-left: 10px;
  margin-right: 10px;
  padding: 3px;
  border: none;
  :hover {
    border-radius: 15px;
    background-color: rgb(134, 38, 51);
    cursor: pointer;
  }
`;

const SideBar = () => {
  return (
    <SideBarBox>
      <Cat>
        <Logo />
      </Cat>
      <SideBarMain>
        <div>
          <NavLink
            to="/"
            exact
            activeStyle={{
              fontWeight: "bold",
              color: "rgb(134,38,51)",
            }}
          >
            <Icon icon={home} />
            Home
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/profile"
            exact
            activeStyle={{
              fontWeight: "bold",
              color: "rgb(134,38,51)",
            }}
          >
            <Icon icon={user} />
            Profile
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/notification"
            exact
            activeStyle={{
              fontWeight: "bold",
              color: "rgb(134,38,51)",
            }}
          >
            <Icon icon={bell} />
            Notifications
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/bookmarks"
            exact
            activeStyle={{
              fontWeight: "bold",
              color: "rgb(134,38,51)",
            }}
          >
            <Icon icon={bookmark} />
            Bookmarks
          </NavLink>
        </div>
        <MeowButton>Meow</MeowButton>
      </SideBarMain>
    </SideBarBox>
  );
};

export default SideBar;
