import React, { createContext, useState } from "react";

export const DataContext = createContext(null);

const DataProvider = ({ children }) => {
  const [userData, setUserData] = useState({ name: '', username: '', isLoggedIn: false });

  // Function to set user data and authenticate
  const setUser = (data) => {
    setUserData({ ...data, isLoggedIn: true });
  };

  // Function to logout
  const logout = () => {
    setUserData({ name: '', username: '', isLoggedIn: false });
  };

  return (
    <DataContext.Provider
      value={{
        userData,
        setUser,
        logout
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
