import React, { Suspense } from 'react';
import Countries from './componentes/Countries';
const countriesPromise = fetch(
  'https://openapi.programming-hero.com/api/all'
).then((res) => res.json());
const App = () => {
  return (
    <div>
      <Suspense fallback={<h1>teh data is coming ./.....</h1>}>
        {' '}
        <Countries countriesPromise={countriesPromise}></Countries>{' '}
      </Suspense>
    </div>
  );
};

export default App;
