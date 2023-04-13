import "../styles/HeadImage.css"

function HeadImage() {
  let url = window.location.pathname
  if (url.includes('a-propos')){
    return(
      <div className="head-image-container">
        <img className="head-image" src="/images/a-propos.png" alt="Kasa Logo" />
      </div>
    )
  } else if (url.includes('')){
    return (
      <div className="head-image-container">
        <img className="head-image" src="/images/headimage-1.png" alt="Kasa Logo" />
        <div className="head-image-overlay">
          <p>Chez vous, partout et ailleurs</p>
        </div>
      </div>)
  }

}

export default HeadImage