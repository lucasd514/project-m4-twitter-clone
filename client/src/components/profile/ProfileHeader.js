import React, { useState, useContext, useEffect } from "react";
import { CurrentUserContext } from "../CreateUserContext";

import styled from "styled-components";

const BannerImage = styled.img`
  border: 5px black dashed;
`;

const Avatar = styled.img`
  border: 3px blue solid;
`;

const Userinfo = styled.div`
  border: 2px yellow dashed;
`;

const LoccationJoin = styled.div`
  border: 2px red solid;
`;
const Followers = styled.div`
  border: 2px orange solid;
`;

const HeaderBox = styled.div`
  border: 2px green dashed;
`;

const Navigation = styled.nav`
  border: 3px lightcoral solid;
`;
const ProfileHeader = (user) => {
  console.log("lets go", user.value.handle);
  return (
    <HeaderBox>
      <BannerImage src="rip this from users pass through" />
      <Avatar src="rip this from users pass" />
      <Userinfo>{user.value.handle}</Userinfo>
      <LoccationJoin>Location when they joined</LoccationJoin>
      <Followers></Followers>
      <Navigation></Navigation>
    </HeaderBox>
  );
};

export default ProfileHeader;
