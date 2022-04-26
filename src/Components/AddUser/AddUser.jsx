import React, { useReducer, useState } from "react";
import useForm from "../../hooks/useForm";
import { types } from "../../types/types";

export const InitialSateUsersReducer = {
  users: [],
};

/* 
    accion

    type: string - verbo/accion que voy a realizar
    payload?: any - informacion que voy a enviar
     
    {
        type: "ADD_USER",
        payload: newUser
    }

*/

export const usersReducer = (state, action) => {
  switch (action.type) {
    case types.ADD_USER:
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case types.DELETE_USER:
      return;

    default:
      return;
  }
};

const AddUser = () => {
  const [state, dispatch] = useReducer(usersReducer, InitialSateUsersReducer);

  /*    dispatch({
       type: types.ADD_USER,
       payload: newUser
   }) */

  // const [users, setUsers] = useState(InitialSateUsersReducer);

  const [form, handleChange] = useForm();

  return (
    <>
      <div>AddUser</div>

      <form>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Nombre"
        />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          type="text"
          name="address"
          value={form.address}
          onChange={handleChange}
          placeholder="Direccion"
        />
        <input
          type="number"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="Telefono"
        />
        <input type="submit" value="Add User" />
      </form>

      <hr />

      <div>
        <p>{state.users[0]?.name}</p>
      </div>
    </>
  );
};

export default AddUser;
