import { Link } from "react-router-dom"
import "../styles/Header.css"

function Header() {
    const url = window.location.pathname;
    const homeLinkClass = url === '/' ? 'undelined' : '';
    const aboutLinkClass = url === '/a-propos' ? 'undelined' : '';

    return(<header>
                <img src="/images/logo.png" alt="Kasa Logo" />
                <nav>
                    <Link className={homeLinkClass} to="/">Accueil</Link>
                    <Link className={aboutLinkClass} to="/a-propos">A Propos</Link>
                </nav>
            </header>)
}

export default Header