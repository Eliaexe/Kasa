import "../styles/Gallery.css"
import { houses } from "../assets/data"
import SingleCard from "./SingleCard"


function Gallery() {
    return (
        <main className="gallery">
            <ul>
                {houses.map(house => (
                    <SingleCard key={house.id} title={house.title} cover={house.cover} id={house.id}/>
                ))}
            </ul>
        </main>
    );
}

export default Gallery;
