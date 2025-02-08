import { useContext, useState, useEffect, createContext } from "react";
import ReactLoading from "react-loading";
import { account } from "../utils/Config";
import { createBrowserHistory } from "history";

// Create contexts
export const ErrorContext = createContext();
export const AuthContext = createContext();

const history = createBrowserHistory();

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null); // Set initial value as null
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    checkUserStatus();
  }, []);

  const loginUser = async (userInfo) => {
    try {
      setLoading(true);
      let response = await account.createEmailPasswordSession(userInfo.email, userInfo.password);
      let accountDetails = await account.get();
      console.log("accountDetails: ", accountDetails);
      setUser(accountDetails); // Correctly set user data
      setLoading(false);
    } catch (error) {
      console.log(error.message);
      setErrorMessage(error.message);
      history.push("/login");
      setLoading(false);
    }
  };

  const logoutUser = () => {
    account.deleteSession("current");
    setUser(null);
  };

  const registerUser = () => {};

  const checkUserStatus = async () => {
    try {
      let accountDetails = await account.get();
      setUser(accountDetails);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  const contextData = {
    user,
    loginUser,
    logoutUser,
    registerUser,
  };

  return (
    <AuthContext.Provider value={contextData}>
      <ErrorContext.Provider value={errorMessage}>
        {loading ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
            }}
          >
            <ReactLoading type={"spin"} color={"#ed8936"} height={"10%"} width={"10%"} />
          </div>
        ) : (
          children
        )}
      </ErrorContext.Provider>
    </AuthContext.Provider>
  );
};

// Custom hooks for using the contexts
export const useAuth = () => {
  return useContext(AuthContext);
};

export const useError = () => {
  return useContext(ErrorContext);
};
