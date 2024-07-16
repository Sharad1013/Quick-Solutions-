import { createContext, useContext, useEffect, useState } from "react";

// context
export const AuthContext = createContext();

const URL = "http://localhost:3000/api/auth/user";

//provider
export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState("");

  const [isLoading, setIsLoading] = useState(true);

  const [services, setServices] = useState([]);

  const authorizationToken = `Bearer ${token}`;


  const API = import.meta.env.VITE_APP_URI_API;

  const storeTokenInLS = (serverToken) => {
    setToken(serverToken);
    return localStorage.setItem("token", serverToken);
  };
  let isLoggedIn = !!token;

  // Tackling the Logout Functionalities
  const LogoutUser = () => {
    setToken("");
    return localStorage.removeItem("token");
  };

  // JWT Authentication -- to get the currently logged in user data.
  // const userAuthentication = async () => {
  //   try {
  //     const response = await fetch("http://localhost:3000/api/auth/user", {
  //       method: "GET",
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     });

  //     if (response.ok) {
  //       const data = await response.json();
  //       setUser(data.userData);
  //     } else {
  //       console.error(`Error fetching user data`);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  const userAuthentication = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`${API}/api/auth/user`, {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });

      if (response.ok) {
        const data = await response.json();
        // our main goal is to get the user data 👇
        setUser(data.userData);
        setIsLoading(false);
      } else {
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // to fetch the service data from the database.
  const getServices = async () => {
    try {
      const response = await fetch(`${API}/api/data/service`, {
        method: "GET",
      });

      if (response.ok) {
        const data = await response.json(); // converting the data from json to object again while fetching from backend
        setServices(data.msg);
      }
    } catch (error) {
      console.log(`services Frontend Error ${error}`);
    }
  };

  useEffect(() => {
    getServices();
    userAuthentication();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        storeTokenInLS,
        LogoutUser,
        user,
        services,
        authorizationToken,
        isLoading,
        API,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Defining a custom hook --> Consumer
export const useAuth = () => {
  const authContextValue = useContext(AuthContext);
  if (!authContextValue) {
    throw new Error("useAuth used outside of the Provider");
  }
  return authContextValue;
};
