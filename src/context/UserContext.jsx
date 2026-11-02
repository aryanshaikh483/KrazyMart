import { createContext, useState } from "react";

export const UserStore = createContext();

export const UserContext = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [user, setUser] = useState(() => {
      const storedUsers = localStorage.getItem("sm_users");

      return storedUsers ? JSON.parse(storedUsers) : []
  });

  return (
    <UserStore.Provider value={{ isLogged, setIsLogged, isRegistered, setIsRegistered, user, setUser }}>
      {children}
    </UserStore.Provider>
  );
};
