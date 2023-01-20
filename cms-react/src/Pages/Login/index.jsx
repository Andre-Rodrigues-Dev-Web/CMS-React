import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { LoginWrapper } from "./style";

const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("login.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, senha }),
    });
    const data = await response.json();
    if (data.success) {
      setIsLoggedIn(true);
    } else {
      alert("Informações de login estão incorretas!");
    }
  };

  if (isLoggedIn) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <LoginWrapper>
        <form onSubmit={handleSubmit}>
            <label>
                E-mail:
                <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
            </label>
            <br />
            <label>
                Password:
                <input
                type="password"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                />
            </label>
            <br />
            <button type="submit">Logar</button>
        </form>
    </LoginWrapper>
  );
};

export default Login;
