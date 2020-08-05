import React, { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProfileHeader from "./profile/ProfileHeader";
import ProfileTweetFeed from "./profile/ProfileTweetFeed";
import styled, { keyframes } from "styled-components";
import ProfileInput from "./profile/ProfileInput";
import { CurrentUserContext } from "./CreateUserContext";

const Profile = () => {
  const { currentUser, status } = useContext(CurrentUserContext);
  const [profileData, setProfileData] = useState(null);
  const [profileStatus, setProfileStatus] = useState("loading");
  const [profileTweets, setProfileTweets] = useState(null);
  const [statusTweets, setStatusTweets] = useState("loading");
  const { handle } = useParams();
  const handleName = handle;

  const Bomb = () => {
    return window.location.replace("/error/noBueno");
  };
  useEffect(() => {
    fetch(`/api/${handleName}/profile`)
      // We get the API response and receive data in JSON format...
      .then((response) => response.json())
      // ...then we update the users state
      .then((data) => {
        setProfileData(data.profile);
        setProfileStatus("idle");
      });
  }, [handleName]);

  useEffect(() => {
    fetch(`/api/${handleName}/feed`)
      // We get the API response and receive data in JSON format...
      .then((response) => response.json())
      // ...then we update the users state
      .then((data) => {
        setProfileTweets(data);
        setStatusTweets("idle");
      })
      .catch((err) => window.replace.location("/error/noBueno"));
  }, [handleName]);

  return (
    <>
      {" "}
      {profileStatus === "idle" && statusTweets === "idle" ? (
        <>
          <ProfileHeader value={profileData}></ProfileHeader>

          {profileTweets.tweetIds.map((items) => {
            let indTweets = profileTweets.tweetsById[items];
            return <ProfileTweetFeed tweet={indTweets} />;
          })}
        </>
      ) : (
        <LoadBox
          src={
            "https://vignette.wikia.nocookie.net/simpsons/images/d/db/Snowball_V.png/revision/latest?cb=20130424153630"
          }
          class="rotate"
        />
      )}
    </>
  );
};

const rotate = keyframes`
from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`;
const LoadBox = styled.img`
  animation: ${rotate} 2s infinite linear;
  width: 100;
  height: 100;
`;
export default Profile;
