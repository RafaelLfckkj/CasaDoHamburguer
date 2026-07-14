import { Link } from "react-router"


export function Home() {
    return(
        <div className="grid justify-center">
            <Link to="/login">Ir para Login</Link>
            <Link to="/register">Ir para cadastro</Link>
        </div>
    )
}