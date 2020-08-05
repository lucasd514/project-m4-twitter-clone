import React, { useState, useContext, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { CurrentUserContext } from "../components/CreateUserContext";
import TweetDetails from "../tweet/TweetDetails";
import TweetInput from "../tweet/TweetInput";
import TweetInput2 from "../tweet/TweetInput2";

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
      })
      .catch((err) => window.location.replace("/error/noBueno"));
  }, [currentUser]);

  const HomeBox = styled.div`
    position: absolute;
    left: 220px;
  `;
  return (
    <>
      {homeStatus === "idle" ? (
        <HomeBox>
          <TweetInput2
            homeFeedData={homeFeedData}
            setHomeFeedData={setHomeFeedData}
          ></TweetInput2>
          {/* // <TweetInput
          //   homeFeedData={homeFeedData}
          //   setHomeFeedData={setHomeFeedData}
          // /> */}
          {homeFeedData.tweetIds.map((tweetId) => {
            let individualTweet = homeFeedData.tweetsById[tweetId];

            return <TweetDetails tweet={individualTweet}></TweetDetails>;
          })}
        </HomeBox>
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
export default HomeFeed;
