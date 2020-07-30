import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Bookmarks from "./components/Bookmarks";
import HomeFeed from "./components/HomeFeed";
import Notifications from "./components/Notifications";
import Profile from "./components/Profile";
import TweetDetails from "./components/TweetDetails";

function App() {
  console.log("daje roma!");
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomeFeed />
        </Route>
        <Route exact path="/bookmarks">
          <Bookmarks />
        </Route>
        <Route exact path="/tweet">
          <TweetDetails />
        </Route>
        <Route exact path="/notification">
          <Notifications />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
