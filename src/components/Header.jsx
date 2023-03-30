import { Link } from "react-router-dom"
import "../styles/Header.css"

function Header() {
    return(<header>
                <img src="/images/logo.png" alt="Kasa Logo" />
                <nav>
                    <Link to="/">Accueil</Link>
                    <Link to="/a-propos">A Propos</Link>
                </nav>
            </header>)
}

export default Header