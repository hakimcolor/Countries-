import { use, useState } from 'react';
import './Countries.css';
import Country from './Countries/Country';

const Countries = ({ countriesPromise }) => {
  const [count, setCount] = useState([]);
  const [resetTrigger, setResetTrigger] = useState(0);

  const handelcount = (countrys) => {
    const newvistCntry = [...count, countrys];
    setCount(newvistCntry);
  };

  const resetVisited = () => {
    setCount([]);
    setResetTrigger((prev) => prev + 1); // Trigger reset in child components
  };

  const countriesData = use(countriesPromise);
  const countries = countriesData.countries;

  return (
    <div>
      <div className="countries-header">
        <h1 className="countries-title">
          🌍 Explore {countries.length} Countries
        </h1>
        <p className="countries-subtitle">
          Discover amazing places around the world
        </p>
      </div>

      {count.length > 0 && (
        <div className="visited-section">
          <div className="visited-header">
            <h3 className="visited-title">
              ✈️ Countries Visited: {count.length}
            </h3>
            <button className="reset-button" onClick={resetVisited}>
              🔄 Reset All
            </button>
          </div>
          <ul className="visited-list">
            {count.map((country, index) => (
              <li key={index} className="visited-item">
                {country}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="countries">
        {countries.map((country) => (
          <Country
            key={country.ccn3.ccn3}
            handelcount={handelcount}
            country={country}
            resetTrigger={resetTrigger}
          />
        ))}
      </div>
    </div>
  );
};

export default Countries;
