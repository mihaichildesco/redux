import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  const login = () => {
    const payload = users.find(
      (user) => user.username === username && user.password === password
    );

    if (payload) {
      dispatch({
        type: "LOGIN",
        payload,
      });
      alert("Succes !!");
    } else {
      alert("Wrong credential !!");
    }
  };

  return (
    <form className="login">
      <input
        type="text"
        placeholder="name"
        value={username}
        onChange={(e) => setUserName(e.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input type="button" value="Login" onClick={login} />
    </form>
  );
};
