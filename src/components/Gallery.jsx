import "../styles/Gallery.css"
import { houses } from "../assets/data"
import SingleCard from "./SingleCard"


function Gallery() {
    return (
        <main className="gallery">
            <ul>
                {houses.map(house => (
                    <SingleCard key={house.id} title={house.title} cover={house.cover}/>
                ))}
            </ul>
        </main>
    );
}

export default Gallery;
