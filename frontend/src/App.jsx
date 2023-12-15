import React from 'react';
import styled from "styled-components";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from "./components/Sidebar/Sidebar";
import Home from './pages/home/home';

const Center = styled.div`
  height: 100vh;
  display: flex;
`

function App() {

  return (
    <BrowserRouter>
      <Center>
        <Sidebar/>    
        <Routes>
            <Route path='/' exact element={<Home />} />
        </Routes>
      </Center>
    </BrowserRouter>
  );
}


export default App; 