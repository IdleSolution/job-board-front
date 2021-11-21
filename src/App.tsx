import React from 'react';
import { CompanyCards } from './components/CompanyCards';
import { Navbar } from './components/Navbar';
import './index.css';

function App() {
  return (
    <div>
      <Navbar />
      <CompanyCards />
    </div>
  );
}

export default App;
