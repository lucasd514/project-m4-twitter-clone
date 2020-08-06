import React, { useState, useContext, useEffect } from "react";
import { CurrentUserContext } from "../CreateUserContext";

import styled from "styled-components";

const BannerImage = styled.img`
  z-index: 2;
  height: 60vh;
  border: 2px black solid;
`;

const FollowBtn = styled.button`
  width: 180px;
  height: 45px;
  padding: 10px 15px;
  border-radius: 30px;
  color: rgb(240, 188, 66);
  font-weight: 700;
  font-size: 1.1rem;
  background: rgb(134, 38, 51);
  cursor: pointer;
  float: right;
  margin-top: 20px;
  margin-right: 20px;
  border: 2px black solid;
  :hover {
    color: rgb(134, 38, 51);
    background: rgb(240, 188, 66);
    cursor: pointer;
  }
`;
const Avatar = styled.img`
  z-index: 4;
  width: 20vh;
  height: 20vh;
  border-radius: 50%;
  border: 6px solid white;
  margin-left: 20px;
  transform: translate(40px, -120px);
`;

const Follow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 180px;
  padding-top: 10px;
  color: darkgray;
  span {
    color: black;
    font-weight: 700;
  }
`;

const Userinfo = styled.div`
  color: darkgray;
  padding-bottom: 10px;
`;
const DisplayName = styled.h2`
  font-weight: 700;
  margin-bottom: 5px;
  font-size: 1.2rem;
`;

const LoccationJoin = styled.div``;
const Followers = styled.div`
  border: 2px orange solid;
  position: relative;
`;

const HeaderBox = styled.div`
  margin-left: 220px;
  a {
    text-decoration: none;
  }
`;

const Navigation = styled.nav``;

const ProfileHeader = (user) => {
  return (
    <HeaderBox>
      <BannerImage src={user.value.bannerSrc} />
      <Avatar src={user.value.avatarSrc} />
      <LoccationJoin>
        <FollowBtn>Follow</FollowBtn>
        <DisplayName>{user.value.displayName}</DisplayName>
        <Userinfo>{user.value.handle}</Userinfo>
        <div>{user.value.location}</div>
      </LoccationJoin>

      <Follow>
        Following:{user.value.numFollowers} Followers:{user.value.numFollowers}
      </Follow>

      <Navigation></Navigation>
    </HeaderBox>
  );
};

export default ProfileHeader;
