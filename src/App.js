import {Routes, Route} from "react-router-dom"
import Apropos from "./pages/Apropos"
import Error404 from "./pages/Err404"
import Home from './pages/Home'
import Logement from "./pages/Logement"

function App() {
    return(
        <div className="App">
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/logement" element={<Logement/>} />             
                <Route path="/a-propos" element={<Apropos/>} />    
                <Route path="*" element={<Error404/>} />    
            </Routes>
        </div>
    )
}

export default App