import { use, useState } from 'react';
import './Countries.css';
import Country from './Countries/Country';
const Countries = ({ countriesPromise }) => {
  const [count, setCount] = useState([]);
  const handelcount = (countrys) => {
    // console.log('hello ');
    const newvistCntry = [...count, countrys];
    setCount(newvistCntry);
    // console.log('............. ', countrys);
  };
  const countriesData = use(countriesPromise);
  const countries = countriesData.countries;
  // console.log(countries);
  return (
    <div>
      <h2>Countries{countries.length}</h2>
      <h3>country Visited:{count.length}</h3>
      <ul>
        {count.map((k, index) => (
          <li key={index}>{k}</li>
        ))}
      </ul>

      <div className="countries">
        {' '}
        {countries.map((country) => (
          <Country
            key={country.ccn3.ccn3}
            handelcount={handelcount}
            country={country}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
