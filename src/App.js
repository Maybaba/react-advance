import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const App = () => {

  // const isVisible = false; //store에서 불러오기
  const isVisible = useSelector(store => state.ui.cartIsVisible);

  return (
    <>
    <Layout >
      {isVisible && <Cart />}
      <Products />
    </Layout>
  
  </>
  );
};

export default App;
