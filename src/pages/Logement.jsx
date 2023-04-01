import Header from "../components/Header";
import Carousel from "../components/Carousel";
import LocationDetails from "../components/LocationDetails";
import { useParams } from "react-router-dom";
import { houses } from "../assets/data"

function Logement(props) {
    let param = useParams()
    const house = houses.find(item => item.id === param.id);
    console.log(house);

    return(<div>
        <Header />
        <Carousel />
        <LocationDetails key={house.id}
                         title={house.title} 
                         location={house.location} 
                         tags={house.tags} 
                         description={house.description} 
                         equipments={house.equipments}
                         host={house.host}
                         rating={house.rating}/>
        </div>
    )
}

export default Logement