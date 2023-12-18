import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Layout from "./layouts/layout"
import Home from './pages/home/home';

function App() {

  return (
    <Layout>
      <Routes>
        <Route path='/' exact element={<Home />} />
      </Routes>
    </Layout>
  );
}


export default App; 