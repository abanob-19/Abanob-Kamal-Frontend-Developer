// src/components/DataGrid.js
import React, { useState } from 'react';
import Popup from './Popup';


const DataGrid = ({ rockets }) => {
  const [selectedRocket, setSelectedRocket] = useState(null);

  const handleClick = (rocket) => {
    setSelectedRocket(rocket);
  };

  const handleClose = () => {
    setSelectedRocket(null);
  };

  return (
    <div className="data-grid bg-blue-500 p-4 md:p-8">
      {rockets.map((rocket) => (
        <div key={rocket.id} className="rocket-card">
          <h2>{rocket.name}</h2>
          <p>{rocket.description}</p>
          <p>company: {rocket.company}</p>
        <p>active: {rocket.active+""}</p>


          <button onClick={() => handleClick(rocket)}>Details</button>
        </div>
      ))}
      {selectedRocket && (
        <Popup rocket={selectedRocket} onClose={handleClose} />
      )}
    </div>
  );
};

export default DataGrid;
