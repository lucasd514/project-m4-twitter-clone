import React, { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import ProfileHeader from "./profile/ProfileHeader";
import IndyTweetpage from "./individualTweetpage/indyTweetPage";
import { CurrentUserContext } from "./CreateUserContext";

const IndividualTweet = () => {
  const { currentUser, status } = useContext(CurrentUserContext);
  const [IndividualTweet, setIndividualTweet] = useState(null);
  const [individualTweetStatus, setIndividualTweetStatus] = useState("loading");
  const { tweetid } = useParams();
  const IDno = tweetid;

  console.log(currentUser);
  console.log(individualTweetStatus);

  console.log(IndividualTweet);

  useEffect(() => {
    if (currentUser) {
      fetch(`/api/tweet/${IDno}`)
        // We get the API response and receive data in JSON format...
        .then((response) => response.json())
        // ...then we update the users state
        .then((data) => {
          setIndividualTweet(data);
          setIndividualTweetStatus("idle");
        });
    }
  }, [currentUser]);

  return (
    <>
      {" "}
      {individualTweetStatus === "idle" && status === "idle" ? (
        <div>
          <IndyTweetpage tweet={IndividualTweet} />
        </div>
      ) : (
        <div>{individualTweetStatus}</div>
      )}
    </>
  );
};

export default IndividualTweet;
