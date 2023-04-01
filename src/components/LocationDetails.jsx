import Dropdown from "./Dropdown"


function LocationDetails(prop) {
    return(<div>
        <div>
            <h1>{prop.title}</h1>
            <h2>{prop.location}</h2>
            {prop.tags.map(tag => (<div className="tag">{tag}</div>))}
        </div>
        <div>
            <div>
                <h2>{prop.host.name}</h2>
                <p></p>
                <img className="" src={prop.host.picture} alt="" />
            </div>
            <div>
                <p>{prop.rating}</p>
            </div>
        </div>

        <Dropdown title="Description" content={prop.description} />
        <Dropdown title="Equipments" content={prop.equipments} />

    </div>)
}

export default LocationDetails