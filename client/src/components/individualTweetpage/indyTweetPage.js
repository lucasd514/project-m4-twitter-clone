import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import { Icon } from "react-icons-kit";
import { arrowLeft } from "react-icons-kit/feather/arrowLeft";
import IndyActionBar from "./indyTweetActionBar";

const IndyTweetPage = (props) => {
  console.log(props.tweet);
  console.log(props.tweet.tweet.author.handle);

  let authorLink = "/" + props.tweet.tweet.author.handle;

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
    border: 3px black solid;
  `;
  const Divider = styled.div`
    border-top: solid 2 black;
    border-bottom: solid 2 black;
  `;
  const Wrapper = styled.div`
    background: white;
    width: 580px;
    margin-left: 250px;
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
  return (
    <div>
      <Meow>
        {" "}
        <Icon icon={arrowLeft} />
        <p>Meow</p>
      </Meow>
      <Wrapper>
        <a href={authorLink}>
          <Header>
            <Avatar src={props.tweet.tweet.author.avatarSrc} />
            <Name>
              <DisplayName>{props.tweet.tweet.author.displayName}</DisplayName>
              <Username>@{props.tweet.tweet.author.handle}</Username>
            </Name>
          </Header>
        </a>
        <TweetContents>{props.tweet.tweet.status}</TweetContents>
        <Timestamp>{props.tweet.tweet.timestamp}</Timestamp>
        <Divider />
        <IndyActionBar buttoninfo={props} />
      </Wrapper>
    </div>
  );
};

export default IndyTweetPage;
