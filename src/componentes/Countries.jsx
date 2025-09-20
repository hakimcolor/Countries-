import { use } from 'react';

import Country from './Countries/Country';
const Countries = ({ countriesPromise }) => {
  const countriesData = use(countriesPromise);
  const countries = countriesData.countries;
  // console.log(countries);
  return (
    <div>
      <h2>Countries{countries.length}</h2>
      {countries.map((country) => (
        <Country key={country.ccn3.ccn3} country={country}></Country>
      ))}
    </div>
  );
};

export default Countries;
