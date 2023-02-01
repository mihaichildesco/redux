import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";

export const Registration = () => {
  const [name, setName] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();

  const register = () => {
    dispatch({
      type: "REGISTER",
      payload: {
        id: new Date().getTime(),
        name,
        username,
        password,
      },
    });
  };

  return (
    <form className="register">
      <input
        type="text"
        placeholder="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(e) => setUserName(e.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="password"
        placeholder="confirm password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <input type="button" value="Register" onClick={register} />
    </form>
  );
};
