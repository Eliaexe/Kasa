import "../styles/SingleCard.css"
import { Link } from "react-router-dom"

function SingleCard(props){
    return(
        <article className="post">
            <Link to={`/logement/${props.id}`}>
                <img src={props.cover} alt="" />
                <div className="overlay">
                    <h2>{props.title}</h2>
                </div>
            </Link>
        </article>
        )
}

export default SingleCard
