import React from 'react';
import { Navbar } from './components/Navbar';
import './index.css';
import { Header } from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Homepage } from './components/Pages/Homepage/index';
import { Company } from './components/Pages/Company';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Homepage />}/>
          <Route path='company/:name' element={<Company />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
