import { Input } from "./components/Input";

export function App() {
  return(
    <div className="p-6 bg-black flex gap-2">
        <Input placeholder="Email..." tipo="email"/>
        <Input placeholder="Senha..." tipo="password"/>
       
    </div>
  )
}