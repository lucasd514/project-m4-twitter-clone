import React from "react";
export const CurrentUserContext = React.createContext(null);

export const CurrentUserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = React.useState(null);
  const [status, setStatus] = React.useState("loading");

  function fetchUsers() {
    // Where we're fetching data from
    fetch(`/api/me/profile`)
      // We get the API response and receive data in JSON format...
      .then((response) => response.json())
      // ...then we update the users state
      .then((data) => {
        setCurrentUser(data.profile);
        setStatus("idle");
      });
    // Catch any errors we hit and update the app
    //   .catch((error) => this.setState({ error, isLoading: false }));
  }

  function getCurrentUser() {
    if (currentUser === null) {
      fetchUsers();
    }
  }

  getCurrentUser();

  return (
    <CurrentUserContext.Provider value={{ currentUser, status }}>
      {children}
    </CurrentUserContext.Provider>
  );
};
