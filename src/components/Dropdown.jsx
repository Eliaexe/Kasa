import React, { useState } from 'react';
import "../styles/Dropdown.css"

function Dropdown(prop) {
  const [isContentVisible, setIsContentVisible] = useState(false);

  const showHideHandler = () => {
    setIsContentVisible(!isContentVisible);
  };

  let content;
  if (typeof prop.content === 'string') {
    content = <p>{prop.content}</p>;
  } else if (typeof prop.content === 'object') {
    content = (
      <ul>
        {prop.content.map((x, i) => (
          <li key={i}>{x}</li>
        ))}
      </ul>
    );
  }

  const url = window.location.pathname;
  if (url.includes('logement')) {
    return (
      <div className="drop-down-logement">
        <div className={`head-drop ${isContentVisible ? '' : 'border-radius'}`}>
          <h3>{prop.title}</h3>
          <img
            className={isContentVisible ? '' : 'rotate'}
            src="/images/arrow-right.png"
            alt="arrow"
            onClick={showHideHandler}
          />
        </div>
        <div className={`body-drop-logement bd-drop-height ${isContentVisible ? 'd-block' : 'd-none'}`} id={prop.title}>
          {content}
        </div>
      </div>
    );
  } else if (url === '/a-propos') {
    return (
      <div className="drop-down-apropos">
        <div className={`head-drop ${isContentVisible ? '' : 'border-radius'}`}>
          <h3 className="head-drop-title">{prop.title}</h3>
          <img
            className={isContentVisible ? '' : 'rotate'}
            src="/images/arrow-right.png"
            alt="arrow"
            onClick={showHideHandler}
          />
        </div>
        <div className={`body-drop bd-drop-height-apopos ${isContentVisible ? 'd-block' : 'd-none'}`} id={prop.title}>
          {content}
        </div>
      </div>
    );
  }
}

export default Dropdown;
