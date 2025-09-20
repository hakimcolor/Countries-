import React, { Suspense } from 'react';
import Countries from './componentes/Countries';

const countriesPromise = fetch(
  'https://openapi.programming-hero.com/api/all'
).then((res) => res.json());

const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        padding: '20px',
      }}
    >
      <Suspense fallback={<h1>the data is coming .....</h1>}>
        <Countries countriesPromise={countriesPromise} />
      </Suspense>
    </div>
  );
};

export default App;
