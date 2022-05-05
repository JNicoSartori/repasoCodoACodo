import React, { useContext, useEffect } from "react";
import { BrowserRouter, useNavigate, Navigate } from "react-router-dom";
import { AuthContext } from "../../auth/AuthContext";
import AddUser from "../../Components/AddUser/AddUser";
import { types } from "../../types/types";

const Home = () => {
  const { authState, dispatch } = useContext(AuthContext);

  const login = () => {
    dispatch({
      type: types.LOGIN,
      payload: {
        name: "Nico",
      },
    });
  };

  return (
    <>
      <div>Home</div>
      <button onClick={login}></button>
      <p>{authState.user?.name}</p>
    </>
  );
};

export default Home;

{
  /* <BrowserRouter>
  <Routes>

    <Route
      path="/" element={<Home />}
    />
    <Route/>
    <Route/>
    <Route/>
    <Route/>

  </Routes>
</BrowserRouter>


switch (url) {
  case value:
    
    break;

  default:
    break;
}
 */
}
