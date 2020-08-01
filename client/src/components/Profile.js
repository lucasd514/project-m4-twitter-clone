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

  const { handle } = useParams();
  const handleName = handle;
  console.log("this is current user", currentUser);
  console.log("this is the dude we went to get", profileData);

  useEffect(() => {
    if (currentUser) {
      fetch(`/api/${handleName}/profile`)
        // We get the API response and receive data in JSON format...
        .then((response) => response.json())
        // ...then we update the users state
        .then((data) => {
          setProfileData(data);
          setProfileStatus("idle");
        });
    }
  }, [currentUser]);

  return (
    <div>
      <ProfileHeader />
      <ProfileTweetFeed />
    </div>
  );
};

export default Profile;
