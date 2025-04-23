import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    user_id: 0,
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    postcode: "",
    region: "",
    long: "",
    lat: "",
    bio: "",
    photoUrl: "",
    isProvider: false,
    token: false,
  });

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
};
