import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Icon } from "react-icons-kit";
import { messageSquare } from "react-icons-kit/feather/messageSquare";
import { repeat } from "react-icons-kit/feather/repeat";
import { heart } from "react-icons-kit/feather/heart";
import { upload } from "react-icons-kit/feather/upload";

const ProfileActionBar = (props) => {
  const [numLikes, setNumLikes] = useState(props.buttoninfo.tweet.numLikes);
  const [numRT, setNumRT] = useState(props.buttoninfo.tweet.numRetweets);
  const [isLiked, setIsLiked] = useState(false);
  const [isRetweeted, setIsRetweeted] = useState(false);

  const fetchHere = "/api/tweet/" + props.buttoninfo.tweet.id + "/like";
  console.log(fetchHere);
  console.log("this id is to be used =============", props.buttoninfo.tweet.id);
  const ActionBox = styled.div`
    display: flex;
    border-bottom: 1px solid;
    margin-bottom: 2px;
  `;
  const ActionBarIcons = styled.button`
    display: block;
    margin-left: 30px;
    padding-left: 10px;
    border: none;
    background: transparent;
    cursor: pointer;
    text-align: left;
    &:active {
      color: inherit;
    }
  `;

  const handleToggleLiked = () => {
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ like: !isLiked }),
    };
    isLiked
      ? fetch(fetchHere, requestOptions)
          .then((response) => response.json())
          .then(setNumLikes(numLikes - 1))
      : fetch(fetchHere, requestOptions)
          .then((response) => response.json())
          .then(setNumLikes(numLikes + 1));
    setIsLiked(!isLiked);
  };

  const handleToggleRetweet = () => {
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ retweet: !isRetweeted }),
    };

    isRetweeted
      ? fetch(`/api/tweet/${props.buttoninfo.tweet.id}/retweet`, requestOptions)
          .then((response) => response.json())
          .then(setNumRT(numRT - 1))
      : fetch(`/api/tweet/${props.buttoninfo.tweet.id}/retweet`, requestOptions)
          .then((response) => response.json())
          .then(setNumRT(numRT + 1));
    setIsRetweeted(!isRetweeted);
  };
  return (
    <ActionBox>
      <ActionBarIcons>
        <Icon icon={messageSquare} />
      </ActionBarIcons>
      <ActionBarIcons>
        <Icon icon={repeat} onClick={handleToggleRetweet} />
        {numRT}
      </ActionBarIcons>
      <ActionBarIcons>
        <Icon icon={heart} onClick={handleToggleLiked} />
        {numLikes}
      </ActionBarIcons>
      <ActionBarIcons>
        <Icon icon={upload} />
      </ActionBarIcons>
    </ActionBox>
  );
};

export default ProfileActionBar;
