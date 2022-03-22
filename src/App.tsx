import React from 'react';
import { Navbar } from './components/Navbar';
import './index.css';
import { Header } from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Homepage } from './components/Pages/Homepage/index';
import { Company } from './components/Pages/Company';
import {ReviewsForm} from "./components/ReviewsForm";
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { InterviewsForm } from './components/InterviewsForm';
import { Login } from './components/Login';



function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path='/' element={<Homepage />}/>
            <Route path='company/:name' element={<Company />}/>
            <Route path='company/:name/review' element={<ReviewsForm />}/>
            <Route path='company/:name/interview' element={<InterviewsForm />}/>
            <Route path='login' element={<Login />}/>
        </Routes>
      </BrowserRouter>
      <ToastContainer style={{fontSize: '1.2rem'}}/>
    </div>
  );
}

export default App;
