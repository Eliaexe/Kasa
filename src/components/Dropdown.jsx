
function Dropdown(prop) {
    // console.log(prop.content);
    return(<div>
        <div>
            <h3>{prop.title}</h3>
            <img className="arrow right" src="/images/arrow-right.png" alt="arrow right" />
        </div>
        <div>{prop.content}</div>
    </div>)
}

export default Dropdown