import React, { useState, useContext, useEffect } from "react";

import styled from "styled-components";
import { CurrentUserContext } from "../components/CreateUserContext";

const TweetInput2 = ({ setHomeFeedData, homeFeedData }) => {
  const [textBox, setTextBox] = React.useState("meow here!");
  const [charLimit, setCharLimit] = React.useState(280);
  console.log(textBox);
  const minusChars = textBox.length;

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ status: textBox }),
  };

  function sendTweet(param) {
    fetch("/api/tweet", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        fetch(`/api/me/home-feed`)
          // We get the API response and receive data in JSON format...
          .then((response) => response.json())
          // ...then we update the users state
          .then((data) => {
            setHomeFeedData(data);
          });
      });
  }

  return (
    <div>
      <TweetInput
        type="text"
        value={textBox}
        onChange={(ev) => setTextBox(ev.target.value)}
        onKeyDown={(ev) => {
          switch (ev.key) {
            case "Enter": {
              sendTweet(textBox);
              return;
            }
          }
        }}
      />
      <button onClick={() => sendTweet(textBox)}>Meow</button>
      <div>{charLimit - minusChars}</div>
    </div>
  );
};

const Total = styled.div`
  display: flex;
`;
const TweetInput = styled.input`
  border-radius: 4px;
  border: 1px solid grey;
  margin-left: 8vw;
  margin-bottom: 50px;
  margin-top: 50px;
  height: 50px;
  width: 500px;
`;
const Button = styled.button`
  margin-left: 20px;
  color: purple;
  background-color: coral;
  border-radius: 4px;
  margin-top: 50px;
  width: 100px;
  height: 50px;
`;
export default TweetInput2;
