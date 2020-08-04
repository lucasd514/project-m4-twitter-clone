import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import { CurrentUserContext } from "../components/CreateUserContext";
import TweetDetails from "../tweet/TweetDetails";
import TweetInput from "../tweet/TweetInput";

const HomeFeed = () => {
  const { currentUser, status } = useContext(CurrentUserContext);
  const [homeFeedData, setHomeFeedData] = useState(null);
  const [homeStatus, setHomeStatus] = useState("loading");

  useEffect(() => {
    fetch(`/api/me/home-feed`)
      // We get the API response and receive data in JSON format...
      .then((response) => response.json())
      // ...then we update the users state
      .then((data) => {
        setHomeFeedData(data);
        setHomeStatus("idle");
      });
  }, [currentUser]);

  const HomeBox = styled.div`
    position: absolute;
    left: 220px;
  `;
  return (
    <>
      {homeStatus === "idle" ? (
        <HomeBox>
          <TweetInput
            homeFeedData={homeFeedData}
            setHomeFeedData={setHomeFeedData}
          />
          {homeFeedData.tweetIds.map((tweetId) => {
            let individualTweet = homeFeedData.tweetsById[tweetId];

            return <TweetDetails tweet={individualTweet}></TweetDetails>;
          })}
        </HomeBox>
      ) : (
        <div>{homeStatus}</div>
      )}
    </>
  );
};

export default HomeFeed;
