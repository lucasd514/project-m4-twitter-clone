import React, { useState, useContext, useEffect } from "react";

import styled from "styled-components";
import { CurrentUserContext } from "../components/CreateUserContext";

const TweetInput = ({ setHomeFeedData, homeFeedData }) => {
  const [value, setValue] = React.useState("");
  const [charLimit, setCharLimit] = React.useState(280);
  console.log(homeFeedData);
  console.log(value);
  const minusChars = value.length;

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ status: value }),
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
      <input
        type="text"
        value={value}
        onChange={(ev) => setValue(ev.target.value)}
        onKeyDown={(ev) => {
          switch (ev.key) {
            case "Enter": {
              sendTweet(value);
              return;
            }
          }
        }}
      />

      <button onClick={() => sendTweet(value)}>Meow</button>
      <div>{charLimit - minusChars}</div>
    </div>
  );
};

export default TweetInput;
