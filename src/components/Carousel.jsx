import "../styles/Carousel.css"

function Carousel() {
    return(<div className="carousel">
        <img className="arrow left" src="/images/arrow-left.png" alt="arrow left" />
        <img src="/images/headimage-1.png" alt="" />
        <img className="arrow right" src="/images/arrow-right.png" alt="arrow right" />
    </div>)
}

export default Carousel