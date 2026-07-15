import { Input } from "../components/Input";

import { useState } from "react";

import { Link } from "react-router";
import { Button } from "../components/Button";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <form
      className="flex justify-center h-screen items-center bg-[#161410]"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col items-center gap-2 justify-center">
        <Link to="/">
          <img
            className="mb-4"
            src="../public/logo.png"
            alt="Logo da casa de Hamburguer"
          />
        </Link>

        <Input
          placeholder="Email..."
          tipo="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Senha..."
          tipo="password"
          onChange={(e) => setPassword(e.target.value)}
        />

   
          <Button title="Login" />

          <Link to="/register" className="w-full">
            <Button title="Não tenho uma Conta" variant="outline" />
          </Link>
        
      </div>
    </form>
  );
}
