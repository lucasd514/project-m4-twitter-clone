import React, { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProfileHeader from "./profile/ProfileHeader";
import IndyTweetpage from "./individualTweetpage/indyTweetPage";
import styled, { keyframes } from "styled-components";
import { CurrentUserContext } from "./CreateUserContext";

const IndividualTweet = () => {
  const { currentUser, status } = useContext(CurrentUserContext);
  const [IndividualTweet, setIndividualTweet] = useState(null);
  const [individualTweetStatus, setIndividualTweetStatus] = useState("loading");
  const { tweetid } = useParams();
  const IDno = tweetid;

  useEffect(() => {
    if (currentUser) {
      fetch(`/api/tweet/${IDno}`)
        // We get the API response and receive data in JSON format...
        .then((response) => response.json())
        // ...then we update the users state
        .then((data) => {
          setIndividualTweet(data);
          setIndividualTweetStatus("idle");
        })
        .catch((err) => {
          window.location.replace("/error/noBueno");
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
export default IndividualTweet;
