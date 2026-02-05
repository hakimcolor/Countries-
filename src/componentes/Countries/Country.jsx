import React, { useState } from 'react';
import './Country.css';

const Country = ({ country, handelcount }) => {
  const [visited, setVisited] = useState(false);

  const hndlClick = () => {
    setVisited(!visited);
    handelcount(countrys);
  };

  const countrys = country.name.common;
  const img = country.flags.flags.png;
  const alt = country.flags.flags.alt;
  const countinents = country.continents.continents;
  const Area = country.area.area;

  return (
    <div className={`country ${visited ? 'vist' : ''}`}>
      <img className="flag-img" src={img} alt={alt} />

      <h3 className="country-name">{countrys}</h3>

      <div className="country-info">
        <span className="country-icon">🌍</span>
        <strong>Continent:</strong> {countinents}
      </div>

      <div className="country-info">
        <span className="country-icon">📏</span>
        <strong>Area:</strong> {Area?.toLocaleString()} km²
        <span
          className={`area-badge ${Area > 300000 ? 'big-country' : 'small-country'}`}
        >
          {Area > 300000 ? 'Large' : 'Small'}
        </span>
      </div>

      <button
        className={`visit-button ${visited ? 'visited' : ''}`}
        onClick={hndlClick}
      >
        {visited ? '✅ Visited' : '🗺️ Mark as Visited'}
      </button>
    </div>
  );
};

export default Country;
