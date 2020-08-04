import React from "react";
import styled from "styled-components";
import ProfileActionBar from "./ProfileActionBar";
import { useHistory } from "react-router-dom";

const ProfileTweetFeed = (props) => {
  console.log("tweetfeed", props);
  console.log(props.tweet.id);
  let tweets = "/tweet/" + props.tweet.id;
  let profile = "/" + props.tweet.author.handle;
  const Wrapper = styled.header`
    display: flex;
  `;

  const Avatar = styled.img`
    width: 48px;
    height: 48px;
    border-radius: 50%;
  `;

  const Name = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0px 16px;
  `;

  const DisplayName = styled.div`
    font-size: 15px;
    line-height: 20px;
    font-weight: bold;
  `;

  const Username = styled.div`
    font-size: 15px;
    line-height: 20px;
    color: rgb(101, 119, 134);
  `;

  const TweetContents = styled.div`
    font-size: 22px;
    padding: 16px 0;
  `;

  const Timestamp = styled.div`
    color: rgb(101, 119, 134);
    font-size: 16px;
    padding-bottom: 16px;
  `;

  const TweetBox = styled.div`
    background: white;
    width: 580px;
    padding: 16px;
    text-align: left;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Ubuntu, "Helvetica Neue", sans-serif;
  `;

  const history = useHistory();

  function navigateTweet(e) {
    e.stopPropagation();
    history.push(`/tweet/${props.tweet.id}`);
  }
  function navigateProfile(e) {
    e.stopPropagation();
    history.push(`/${props.tweet.author.handle}`);
  }
  return (
    <TweetBox>
      <Wrapper tabIndex="0" onClick={navigateProfile}>
        <Avatar src={props.tweet.author.avatarSrc} />
        <Name>
          <DisplayName>{props.tweet.author.displayName}</DisplayName>
          <Username>@{props.tweet.author.handle}</Username>
        </Name>
      </Wrapper>

      <TweetContents tabIndex="0" onClick={navigateTweet}>
        {props.tweet.status}
      </TweetContents>
      <Timestamp tabIndex="0" onClick={navigateTweet}>
        {props.tweet.timestamp}{" "}
      </Timestamp>

      <ProfileActionBar buttoninfo={props} />
    </TweetBox>
  );
};

export default ProfileTweetFeed;
