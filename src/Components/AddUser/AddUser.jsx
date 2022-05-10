import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import useForm from "../../hooks/useForm";
import { types } from "../../types/types";
import styles from "./AddUser.module.css";

export const UsersContext = createContext();

/* 
    accion

    type: string - verbo/accion que voy a realizar
    payload?: any - informacion que voy a enviar
     
    {
        type: "ADD_USER",
        payload: newUser
    }

    Funcion dispatch para ejecutar la accion

    dispatch({
        type: types.ADD_USER,
        payload: newUser
    })

*/

export const InitialSateUsersReducer = {
  users: [],
};

export const usersReducer = (state, action) => {
  switch (action.type) {
    case types.ADD_USER:
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case types.DELETE_USER:
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload),
      };

    default:
      return;
  }
};

const AddUser = () => {
  const [state, dispatch] = useReducer(usersReducer, InitialSateUsersReducer);
  // const [users, setUsers] = useState(InitialSateUsersReducer);
  const [form, handleChange] = useForm();
  const [redColor, setRedColor] = useState(true);

  const createUser = () => {
    const id = Date.now();

    const newUser = {
      id: id,
      name: form.name,
      email: form.email,
      address: form.address,
      phone: form.phone,
    };

    return newUser;
  };

  const removeUser = (id) => {
    dispatch({
      type: types.DELETE_USER,
      payload: id,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = createUser();
    dispatch({
      type: types.ADD_USER,
      payload: newUser,
    });
  };

  return (
    <div className={styles.container}>
      <UsersContext.Provider
        value={{
          state,
          dispatch,
        }}
      ></UsersContext.Provider>

      <div
        style={{
          backgroundColor: "white",
        }}
      >
        <h1 className={`${styles.title} ${redColor && styles.red}`}>
          ADD USER
        </h1>
      </div>

      <div className={styles["container-form"]}>
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
          <input type="submit" value="Add User" onClick={handleSubmit} />
        </form>
      </div>

      <hr />

      <div>
        <h3>Usuarios</h3>
        <ul>
          {state.users.map((user, i) => (
            <li key={i}>
              {user.name}
              <button onClick={() => removeUser(user.id)}>Eliminar</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AddUser;
