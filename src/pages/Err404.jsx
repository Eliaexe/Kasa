import Header from "../components/Header";
import Footer from "../components/Footer"
import "../styles/Err404.css"
import { Link } from "react-router-dom"

function Error404() {
    return(
    <div>
        <Header />    
        <main className="error">
            <h1>404</h1>
            <h2>Oups! La page que vous demandez n'existe pas</h2>
            <Link to="/">Retourner sur la page d'accueil</Link>
        </main>
        <Footer />
    </div>)
}

export default Error404