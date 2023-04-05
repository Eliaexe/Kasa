import "../styles/Dropdown.css"

function Dropdown(prop) {
    // console.log(prop.content);

    let content 
    if (typeof prop.content == 'string') {
        content = <p>{prop.content}</p>
    } else if(typeof prop.content == 'object'){
        content = <ul>{prop.content.map( x => <li>{x}</li>)}</ul>         
    }
    return(<div className="drop-down">
                <div className="head-drop">
                    <h3>{prop.title}</h3>
                    <img className="" src="/images/arrow-right.png" alt="arrow right" />
                </div>
                <div className="body-drop">
                    {content}
                </div>
            </div>)
}

export default Dropdown