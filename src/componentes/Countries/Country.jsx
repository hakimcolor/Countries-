import React from 'react';

const Country = ({ country }) => {
  const countrys = country.name.common;
  const img = country.flags.flags.png;
  const alt = country.flags.flags.alt;
  const countinents = country.continents.continents;
  console.log(countrys);
  return (
    <div >

      <img src={img} alt={alt} />
      <h1>Name: {countrys}</h1>
      <h1>Countinents :{ countinents}</h1>
    </div>
  );
};

export default Country;
