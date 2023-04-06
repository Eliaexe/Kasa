import "../styles/Dropdown.css"

function Dropdown(prop) {
    const url = window.location.pathname;

    let content 
    if (typeof prop.content == 'string') {
        content = <p>{prop.content}</p>
    } else if(typeof prop.content == 'object'){
        content = <ul>{prop.content.map( x => <li>{x}</li>)}</ul>         
    }

    if (url.includes('logement')) {
        return(<div className="drop-down-logement">
                <div className="head-drop">
                    <h3>{prop.title}</h3>
                    <img className="" src="/images/arrow-right.png" alt="arrow right" />
                </div>
                <div className="body-drop bd-drop-height">
                    {content}
                </div>
            </div>)
    } else if (url === '/a-propos') {
        return(<div className="drop-down-apropos">
                <div className="head-drop">
                    <h3>{prop.title}</h3>
                    <img className="" src="/images/arrow-right.png" alt="arrow right" />
                </div>
                <div className="body-drop bd-drop-height-apopos">
                    {content}
                </div>
            </div>)
    }
    
}

export default Dropdown