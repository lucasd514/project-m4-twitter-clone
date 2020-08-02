import React from "react";
import styled from "styled-components";
import ActionBar from "../tweet/actionbar";

const TweetDetails = (props) => {
  let info = props;

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
      <Wrapper>
        <Avatar src={props.tweet.author.avatarSrc} />
        <Name>
          <DisplayName>{props.tweet.author.displayName}</DisplayName>
          <Username>@{props.tweet.author.handle}</Username>
        </Name>
      </Wrapper>
      <TweetContents>{props.tweet.status}</TweetContents>
      <Timestamp>{props.tweet.timestamp} </Timestamp>
      {/* ACTION BAR GOES HERE */}
      <ActionBar value={info} />

      {/* ACTION BAR ENDS HERE */}
    </TweetBox>
  );
};

export default TweetDetails;