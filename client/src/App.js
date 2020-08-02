import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Bookmarks from "./components/Bookmarks";
import HomeFeed from "./components/HomeFeed";
import Notifications from "./components/Notifications";
import Profile from "./components/Profile";
import TweetDetails from "./tweet/TweetDetails";
import SideBar from "./components/SideBar";
import IndividualTweet from "./components/IndividualTweet";

function App() {
  return (
    <Router>
      <SideBar></SideBar>
      <Switch>
        <Route exact path="/">
          <HomeFeed />
        </Route>
        <Route exact path="/bookmarks">
          <Bookmarks />
        </Route>
        <Route exact path="/tweet/:tweetid">
          <IndividualTweet />
        </Route>
        <Route exact path="/notification">
          <Notifications />
        </Route>
        <Route exact path="/:handle/">
          <Profile />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
