import React, { useState, useContext, useEffect } from "react";

import styled from "styled-components";
import { CurrentUserContext } from "../components/CreateUserContext";

const TweetInput = ({ setHomeFeedData, homeFeedData }) => {
  const [textBox, setTextBox] = React.useState("meow here!");
  const [charLimit, setCharLimit] = React.useState(280);
  console.log(homeFeedData);
  console.log(textBox);
  const minusChars = textBox.length;

  const InputBox = styled.div`
    border: 2px rgb(240, 188, 66) solid;
    border-radius: 25%;
    width: 350px;
    height: 150px;
    margin-left: 20vw;
    input {
      margin-left: 75px;
      margin-top: 50px;
    }
  `;

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
    <InputBox>
      <input
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
    </InputBox>
  );
};

export default TweetInput;
