import { Input } from "./components/Input";

import { useState } from "react";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e : React.FormEvent<HTMLFormElement>){
    e.preventDefault();
    console.log("Email:", email);
    console.log("Senha:", password);
  }

  return (
    <form className="flex justify-center h-screen items-center bg-[#161410]" onSubmit={handleSubmit}>
      <div className="flex flex-col items-center gap-2 justify-center">
        <img
          className="mb-4"
          src="../public/logo.png"
          alt="Logo da casa de Hamburguer"
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
        
        <button
          className="bg-[#C92A0E] w-full py-2 rounded-md cursor-pointer text-white font-bold text-sm"
        >
          Login
        </button>
      </div>
    </form>
  );
}
