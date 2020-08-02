import React, { useState, useContext, useEffect } from "react";
import { CurrentUserContext } from "../CreateUserContext";

import styled from "styled-components";

const BannerImage = styled.img`
  width: 82vw;
  position: relative;
`;

const Avatar = styled.img`
  border: 3px blue solid;
  border-radius: 50%;
  width: 15vw;
  position: absolute;
  top: 45vh;
`;

const Userinfo = styled.div`
  border: 2px yellow dashed;
`;

const LoccationJoin = styled.div`
  border: 2px red solid;
`;
const Followers = styled.div`
  border: 2px orange solid;
  position: relative;
`;

const HeaderBox = styled.div`
  border: 2px green dashed;
  margin-left: 202px;
  position: relative;
`;

const Navigation = styled.nav`
  border: 3px lightcoral solid;
`;

const Rando = styled.div`
  border: 2px orange solid;
`;
const ProfileHeader = (user) => {
  console.log("lets go", user.value.handle);
  return (
    <HeaderBox>
      <Rando>
        <BannerImage src={user.value.bannerSrc} />
        <Avatar src={user.value.avatarSrc} />
      </Rando>
      <Followers>
        Following:{user.value.numFollowers} Followers:{user.value.numFollowers}
      </Followers>
      <Userinfo>{user.value.handle}</Userinfo>
      <LoccationJoin>{user.value.location}</LoccationJoin>

      <Navigation></Navigation>
    </HeaderBox>
  );
};

export default ProfileHeader;
