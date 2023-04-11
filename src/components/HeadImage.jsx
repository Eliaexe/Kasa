import "../styles/HeadImage.css"

function HeadImage() {
    return (
    <div className="head-image-container">
      <img className="head-image" src="/images/headimage-1.png" alt="Kasa Logo" />
      <div className="head-image-overlay">
        <p>Chez vous, partout et ailleurs</p>
      </div>
    </div>)
}

export default HeadImage