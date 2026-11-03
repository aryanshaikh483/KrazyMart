import { createContext, useEffect, useState } from "react";

export const UserStore = createContext();

export const UserContext = ({ children }) => {
  const [isLogged, setIsLogged] = useState(() => {
    return JSON.parse(localStorage.getItem("sm_isLogged")) ?? false;
  });
  const [isRegistered, setIsRegistered] = useState(() => {
    return JSON.parse(localStorage.getItem("sm_isRegistered")) ?? false;
  });
  const [user, setUser] = useState(() => {
    const storedUsers = localStorage.getItem("sm_users");

    return storedUsers ? JSON.parse(storedUsers) : [];
  });

  const [session, setSession] = useState(() => {
    return JSON.parse(localStorage.getItem("sm_session")) ?? null;
  });

  useEffect(() => {
    localStorage.setItem("sm_isLogged", JSON.stringify(isLogged));
  }, [isLogged]);

  useEffect(() => {
    localStorage.setItem("sm_isRegistered", JSON.stringify(isRegistered));
  }, [isRegistered]);

  useEffect(() => {
    localStorage.setItem("sm_users", JSON.stringify(user));
  }, [user]);

  useEffect(() => {
    localStorage.setItem("sm_session", JSON.stringify(session));
  }, [session]);

  return (
    <UserStore.Provider
      value={{
        isLogged,
        setIsLogged,
        isRegistered,
        setIsRegistered,
        user,
        setUser,
        setSession,
        session
      }}
    >
      {children}
    </UserStore.Provider>
  );
};
