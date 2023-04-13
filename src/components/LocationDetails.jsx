import Dropdown from "./Dropdown"
import "../styles/LocationDetails.css"

function LocationDetails(prop) {
  return (
    <div className="location-details">
      <section className="section">
        <div className="left-section">
          <div className="home-presentation">
            <h1>{prop.title}</h1>
            <h2>{prop.location}</h2>
          </div>
          <div className="tagContainer">
            {prop.tags.map((tag, index) => (
              <span key={`tag-${index}`} className="tag">{tag}</span>
            ))}
          </div>
        </div>
        <div className="right-section">
          <div className="host-details">
            <h2>{prop.host.name}</h2>
            <img className="" src={prop.host.picture} alt="" />
          </div>
          <div className="star-container">
            {Array.from({ length: prop.rating }, (_, index) => (
              <img key={`full-star-${index}`} src="/images/Full-Star.png" alt="full star" />
            ))}
            {Array.from({ length: 5 - prop.rating }, (_, index) => (
              <img key={`empty-star-${index}`} src="/images/Empty-Star.png" alt="empty star" />
            ))}
          </div>
        </div>
      </section>

      <div className="drop-container">
        <Dropdown title="Description" content={prop.description} />
        <Dropdown title="Equipments" content={prop.equipments} />
      </div>
    </div>
  )
}

export default LocationDetails
