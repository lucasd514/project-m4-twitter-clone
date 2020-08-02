import React, { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import ProfileHeader from "./profile/ProfileHeader";
import ProfileTweetFeed from "./profile/ProfileTweetFeed";
import { CurrentUserContext } from "./CreateUserContext";

const IndividualTweet = () => {
  const { currentUser, status } = useContext(CurrentUserContext);
  const [IndividualTweet, setProfileData] = useState(null);
  const [profileStatus, setProfileStatus] = useState("loading");

  const { tweetid } = useParams();
  const IDno = tweetid;

  return <div>{IDno}</div>;
};

export default IndividualTweet;
