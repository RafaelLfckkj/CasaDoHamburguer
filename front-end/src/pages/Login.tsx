import { Input } from "../components/Input";

import { useState } from "react";

import { Link } from "react-router";
import { Button } from "../components/Button";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      // console.log(response.status);

      if (response.status === 404) {
        setError("Usúario não Encontrado");
      } else if (response.status === 400) {
        setError("Usúario e senha são Obrigatórios");
      } else if (response.status === 200) {
        setError("");
        const data = await response.json();
        console.log(data);
      }
    } catch (error) {
      console.log(error)
      return
    }
  }

  return (
    <form
      className="flex justify-center h-screen items-center bg-[#161410]"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col gap-2 justify-center">
        <Link to="/">
          <img
            className="mb-4 mx-auto"
            src="../public/logo.png"
            alt="Logo da casa de Hamburguer"
          />
        </Link>

        <div className="flex flex-col mb-3 gap-2">
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
          <p className="text-red-500 font-bold text-left text-sm">{error}</p>
        </div>

        <Button title="Login" type="submit" />

        <Link to="/register" className="w-full">
          <Button title="Não tenho uma Conta" variant="outline" />
        </Link>
      </div>
    </form>
  );
}
