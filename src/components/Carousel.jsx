import "../styles/Carousel.css"



function Carousel(props) {
    let picture = props.pictures 
    return(
    <div className="carousel">
        {        
            picture.map((pic, index) => (
                <img src={pic} alt="" id={index} />
            ))
        }
    </div>)
}

// <img className="arrow right" src="/images/arrow-right.png" alt="arrow right" />
export default Carousel