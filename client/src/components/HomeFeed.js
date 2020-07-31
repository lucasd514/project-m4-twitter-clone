import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import { CurrentUserContext } from "../components/CreateUserContext";
import TweetDetails from "../tweet/TweetDetails";

const HomeFeed = () => {
  const { currentUser, status } = useContext(CurrentUserContext);
  const [homeFeedData, setHomeFeedData] = useState(null);
  const [homeStatus, setHomeStatus] = useState("loading");
  console.log(homeFeedData);

  useEffect(() => {
    if (currentUser) {
      fetch(`/api/me/home-feed`)
        // We get the API response and receive data in JSON format...
        .then((response) => response.json())
        // ...then we update the users state
        .then((data) => {
          setHomeFeedData(data);
          setHomeStatus("idle");
        });
    }
  }, [currentUser]);

  return (
    <>
      {" "}
      {homeStatus === "idle" ? (
        <div>
          {homeFeedData.tweetIds.map((tweetId) => {
            let individualTweet = homeFeedData.tweetsById[tweetId];
            console.log(individualTweet);
            return <TweetDetails tweet={individualTweet}></TweetDetails>;
          })}
        </div>
      ) : (
        <div>{homeStatus}</div>
      )}
    </>
  );
};

export default HomeFeed;
