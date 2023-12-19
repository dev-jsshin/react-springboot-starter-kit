import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Layout from "./layouts/layout"
import Home from './pages/home/home';
import Counter from './pages/counter/counter';

function App() {

  return (
    <Layout>
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/counter' exact element={<Counter />} />
      </Routes>
    </Layout>
  );
}


export default App; 