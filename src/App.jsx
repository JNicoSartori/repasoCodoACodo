import React, { useReducer } from "react";
import Home from "./views/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import { authInitState, authReducer } from "./auth/authReducer";
import { AuthContext } from "./auth/AuthContext";

function App() {
  const [authState, dispatch] = useReducer(authReducer, authInitState);

  return (
    <>
      <AuthContext.Provider
        value={{
          authState,
          dispatch,
        }}
      >
        <AppRoutes />
      </AuthContext.Provider>
    </>
  );
}

export default App;
