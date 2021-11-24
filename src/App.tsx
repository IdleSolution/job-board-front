import React from 'react';
import { CompanyCards } from './components/CompanyCards';
import { Filters } from './components/Filters';
import { Navbar } from './components/Navbar';
import './index.css';
import { CardsAndFilterContainer } from './components/CompanyCards/style';
import { Header } from './components/Header';

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <CardsAndFilterContainer>
        <Filters />
        <CompanyCards />
      </CardsAndFilterContainer>
    </div>
  );
}

export default App;
