import React from 'react';
import './Image.css';

const Image = ({ source, text }) => {
  return (
    <img className="image-component" src={source} alt={text} />
  );
};

export default Image;
