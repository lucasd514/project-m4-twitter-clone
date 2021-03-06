import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import { Icon } from "react-icons-kit";
import { arrowLeft } from "react-icons-kit/feather/arrowLeft";
import IndyActionBar from "./indyTweetActionBar";
import { useHistory } from "react-router-dom";
import moment from "moment";

const IndyTweetPage = (props) => {
  let authorLink = "/" + props.tweet.tweet.author.handle;

  let timeClean = moment(props.tweet.timestamp).format("h:mm a ∙ MMM Do, YYYY");
  const photo = props.tweet.tweet.media;
  const catPhotos = photo.map((ele) => ele.url);

  console.log(catPhotos);
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
  const Avatar = styled.img`
    width: 48px;
    height: 48px;
    border-radius: 50%;
  `;
  const Header = styled.div`
    display: flex;
  `;

  const Meow = styled.div`
    width: 580px;
    display: flex;
  `;
  const Divider = styled.div`
    border-top: solid 2 black;
    border-bottom: solid 2 black;
  `;
  const Wrapper = styled.div`
    background: white;
    width: 580px;
    margin-left: 250px;
    margin-top: 20vh;
    padding: 16px;
    text-align: left;
    border: rgb(101, 119, 134) 2px solid;
    border-radius: 10px;
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
  const LikeRT = styled.div`
    color: rgb(101, 119, 134);
    font-size: 16px;
    padding-bottom: 16px;
  `;

  const history = useHistory();

  function navigateTweet(e) {
    e.stopPropagation();
    history.push(`/tweet/${props.value.id}`);
  }
  function navigateProfile(e) {
    e.stopPropagation();
    history.push(`/${props.tweet.tweet.author.handle}`);
  }

  function goBack(e) {
    e.stopPropagation();
    history.goBack();
  }
  return (
    <div>
      <Meow>
        {" "}
        <Icon icon={arrowLeft} tabIndex="0" onClick={goBack} />
      </Meow>
      <Wrapper>
        <Header tabIndex="0" onClick={navigateProfile}>
          <Avatar src={props.tweet.tweet.author.avatarSrc} />
          <Name>
            <DisplayName>{props.tweet.tweet.author.displayName}</DisplayName>
            <Username>@{props.tweet.tweet.author.handle}</Username>
          </Name>
        </Header>

        <TweetContents>{props.tweet.tweet.status}</TweetContents>
        <img src={catPhotos} />
        <LikeRT></LikeRT>
        <Timestamp>{timeClean}</Timestamp>
        <Divider />
        <IndyActionBar buttoninfo={props} />
      </Wrapper>
    </div>
  );
};

export default IndyTweetPage;
