import React from 'react';

import './Images.css';

const Images = props => {
  return (
    <div className="inputs">
      <img
        src={props.image}
        alt={props.alt}
        style={{ width: props.width, height: props.width }}
      />
    </div>
  );
};

export default Images;
