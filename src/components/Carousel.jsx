import "../styles/Carousel.css";
import { useState } from "react";

function Carousel(props) {
  const pictures = props.pictures;
  const [currentSlide, setCurrentSlide] = useState(0);
  const hideButtons = pictures.length === 1;

  const nextSlide = () => {
    if (currentSlide === pictures.length - 1) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(pictures.length - 1);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <div className="carousel">
      <button onClick={prevSlide} className={`slider ${hideButtons ? 'd-none' : ''}`}>
        <img className="arrow" src="/images/arrow-left.png" alt="arrow left" />
      </button>
      {pictures.map((pic) => (
        <img
          key={pic}
          src={pic}
          alt=""
          className={pic === pictures[currentSlide] ? "active homeImage" : "homeImage"}
        />
      ))}
      <button onClick={nextSlide} className={`slider right ${hideButtons ? 'd-none' : ''}`}>
        <img className="arrow" src="/images/arrow-right.png" alt="arrow right" />
      </button>
    </div>
  );
}

export default Carousel;
