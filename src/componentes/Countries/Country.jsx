import React, { useState } from 'react';
import './Country.css';
const Country = ({ country, handelcount }) => {
  const [visited, setVisited] = useState(false);
  const hndlClick = () => {
    // console.log('button clicked', countrys);
    setVisited(!visited);
    handelcount(countrys);
  };
  const countrys = country.name.common;
  const img = country.flags.flags.png;
  const alt = country.flags.flags.alt;
  const countinents = country.continents.continents;
  const Area = country.area.area;
  // console.log(countrys);
  return (
    <div className={`country ${visited && 'vist'}`}>
      <img className="flag-img " src={img} alt={alt} />
      <h3>Name: {countrys}</h3>
      <h3>Countinents :{countinents}</h3>
      <h3>
        Area:{Area} {Area > 300000 ? '(big country)' : '(small country)'}
      </h3>
      <button onClick={hndlClick}>
        {' '}
        {visited ? 'Visitead' : 'Not visited'}
      </button>
    </div>
  );
};

export default Country;
