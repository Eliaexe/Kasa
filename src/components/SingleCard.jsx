import "../styles/SingleCard.css"

function SingleCard(props){
    return(
        <article>
            <img src={props.cover} alt="" />
            <div className="overlay">
                <h2>{props.title}</h2>
            </div>
        </article>
        )
}

export default SingleCard
