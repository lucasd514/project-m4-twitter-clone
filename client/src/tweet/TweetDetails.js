import React from "react";
import styled from "styled-components";

const TweetDetails = (props) => {
  console.log(props.tweet);
  
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




  return (

<Wrapper>
      <Avatar src={props.tweet.author.avatarSrc} />
      <Name>
        <DisplayName>{displayName}</DisplayName>
        <Username>@{username}</Username>
      </Name>
    </Wrapper>

    <div>
      <div>
        is liked:{props.tweet.isLiked.toString()} is retweeted:is liked:
        {props.tweet.isRetweeted.toString()}
      </div>
      <div>{props.tweet.id}</div>
      <div>{props.tweet.status}</div>
      <div>{props.tweet.author.avatarSrc}</div>
      <div>{props.tweet.author.displayName}</div>
      <div>{props.tweet.author.handle}</div>
      <div>{props.tweet.author.displayName}</div>
      <div>{props.tweet.timestamp}</div>
    </div>
  );
};

export default TweetDetails;
