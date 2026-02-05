import React, { Suspense } from 'react';
import Countries from './componentes/Countries';
import './App.css';

const countriesPromise = fetch(
  'https://openapi.programming-hero.com/api/all'
).then((res) => res.json());

const App = () => {
  return (
    <div className="app-container">
      <Suspense
        fallback={
          <div className="loading-container">
            <div className="loading-spinner"></div>
            <h1 className="loading-text">Loading amazing countries...</h1>
          </div>
        }
      >
        <Countries countriesPromise={countriesPromise} />
      </Suspense>
    </div>
  );
};

export default App;
