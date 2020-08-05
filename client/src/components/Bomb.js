import React, { useState, useContext, useEffect } from "react";
import { Icon } from "react-icons-kit";
import { u1F4A3 as bomb } from "react-icons-kit/noto_emoji_regular/u1F4A3";
import styled from "styled-components";

const Bomb = () => {
  return (
    <div>
      <div>Oh no he's dead, use the sidebar to navigate back!</div>
      <Icon icon={bomb} size={150} />
    </div>
  );
};

export default Bomb;
