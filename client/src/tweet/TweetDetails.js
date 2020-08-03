import React from "react";
import styled from "styled-components";
import ActionBar from "../tweet/actionbar";

const TweetDetails = (props) => {
  console.log(props);
  let info = props;

  let author = props.tweet.author.handle;
  let tweets = "/tweet/" + props.tweet.id;

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

  return (
    <TweetBox>
      <a href={tweets}>
        <Wrapper>
          <a href={author}>
            <Avatar src={props.tweet.author.avatarSrc} />
            <Name>
              <DisplayName>{props.tweet.author.displayName}</DisplayName>
              <Username>@{props.tweet.author.handle}</Username>
            </Name>
          </a>
        </Wrapper>

        <TweetContents>{props.tweet.status}</TweetContents>
        <Timestamp>{props.tweet.timestamp} </Timestamp>
      </a>
      <ActionBar buttoninfo={props} />
    </TweetBox>
  );
};

export default TweetDetails;
