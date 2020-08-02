import React, { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import ProfileHeader from "./profile/ProfileHeader";
import ProfileTweetFeed from "./profile/ProfileTweetFeed";
import { CurrentUserContext } from "./CreateUserContext";

const Profile = () => {
  const { currentUser, status } = useContext(CurrentUserContext);
  const [profileData, setProfileData] = useState(null);
  const [profileStatus, setProfileStatus] = useState("loading");
  const [profileTweets, setProfileTweets] = useState(null);
  const { handle } = useParams();
  const handleName = handle;

  console.log(profileTweets);

  useEffect(() => {
    if (currentUser) {
      fetch(`/api/${handleName}/profile`)
        // We get the API response and receive data in JSON format...
        .then((response) => response.json())
        // ...then we update the users state
        .then((data) => {
          setProfileData(data.profile);
          setProfileStatus("idle");
        });
    }
  }, [currentUser]);

  useEffect(() => {
    if (currentUser) {
      fetch(`/api/${handleName}/feed`)
        // We get the API response and receive data in JSON format...
        .then((response) => response.json())
        // ...then we update the users state
        .then((data) => {
          setProfileTweets(data);
          setProfileStatus("idle");
        });
    }
  }, [currentUser]);

  return (
    <>
      {" "}
      {profileStatus === "idle" ? (
        <div>
          <ProfileHeader value={profileData}></ProfileHeader>
          <ProfileTweetFeed />
        </div>
      ) : (
        <div>
          {profileStatus} <ProfileTweetFeed />
        </div>
      )}
    </>
  );
};

export default Profile;
