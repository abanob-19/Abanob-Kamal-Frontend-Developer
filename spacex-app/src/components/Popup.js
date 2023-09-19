// src/components/Popup.js
import React from 'react';

const Popup = ({ rocket, onClose }) => {
  return (
    <div className="popup bg-blue-500 p-4 md:p-8">
      <div className="popup-content">
        <button className="close" onClick={onClose}>
          &times;
        </button>
        <h2>{rocket.name}</h2>
        <p>{rocket.description}</p>
        <p>company: {rocket.company}</p>
        <p>active: {rocket.active+""}</p>
      </div>
    </div>
  );
};

export default Popup;
