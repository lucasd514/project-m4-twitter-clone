import React from "react";
export const CurrentUserContext = React.createContext(null);

export const CurrentUserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = React.useState(null);
  const [status, setStatus] = React.useState("loading");

  console.log("start", currentUser);
  console.log("tart", status);

  function fetchUsers() {
    // Where we're fetching data from
    fetch(`/api/me/profile`)
      // We get the API response and receive data in JSON format...
      .then((response) => response.json())
      // ...then we update the users state
      .then((data) => {
        console.log(data.profile);
        setCurrentUser(data.profile);
        setStatus("idle");
      });
    // Catch any errors we hit and update the app
    //   .catch((error) => this.setState({ error, isLoading: false }));
  }

  function getCurrentUser() {
    if (currentUser === null) {
      fetchUsers();
      console.log("end", currentUser);
      console.log("end status", status);
    }
  }

  getCurrentUser();

  return (
    <CurrentUserContext.Provider value={{ currentUser, status }}>
      {children}
    </CurrentUserContext.Provider>
  );
};
