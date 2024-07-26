import React, { useState } from 'react';
import ReduxCounter from './redux-practice/components/ReduxCounter';
import Header from './redux-practice/components/Header';
import Auth from './redux-practice/components/Auth';

const App = () => {

  return (
    <>
      <Header />
      <Auth />
      <ReduxCounter />
    </>
  );
};

export default App;
