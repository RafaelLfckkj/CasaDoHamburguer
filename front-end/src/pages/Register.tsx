import { Input } from "../components/Input";

import { useState } from "react";

import { Link } from "react-router";
import { Button } from "../components/Button";

export function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [cep, setCep] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    console.log({ name, email, password, confirmPassword, cep });
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
          placeholder="Nome..."
          tipo="text"
          onChange={(e) => setName(e.target.value)}
        />
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
        <Input
          placeholder="Confirmar sua Senha..."
          tipo="password"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Input
          placeholder="CEP..."
          tipo="text"
          onChange={(e) => setCep(e.target.value)}
        />

       

        <Button title="Criar conta" />
        <Link to="/login" className="w-full" >
          <Button title="Já tenho uma Conta" variant="outline" />
        </Link>
       
      </div>
    </form>
  );
}
