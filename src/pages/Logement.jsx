import Header from "../components/Header";
import Carousel from "../components/Carousel";
import LocationDetails from "../components/LocationDetails";
import Footer from "../components/Footer"
import { useParams } from "react-router-dom";
import { houses } from "../assets/data"

function Logement(props) {
    let param = useParams()
    const house = houses.find(item => item.id === param.id);
    return(<div>
        <Header />
        <Carousel key={house.id} pictures={house.pictures} />
        <LocationDetails key={house.id}
                         title={house.title} 
                         location={house.location} 
                         tags={house.tags} 
                         description={house.description} 
                         equipments={house.equipments}
                         host={house.host}
                         rating={house.rating}/>
        <Footer />
        </div>
    )
}

export default Logement