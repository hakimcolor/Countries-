import React from 'react';

const Country = ({ country }) => {
  const countrys = country.name.common;
  console.log(countrys);
  return <div>Name: { countrys}</div>;
};

export default Country;
