import React from "react";
import styled from "styled-components";

const TweetDetails = (props) => {
  console.log(props.tweet);
  return (
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
