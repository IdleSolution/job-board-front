import React, {useContext, useEffect} from 'react';
import { Navbar } from './components/Navbar';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Homepage } from './components/Pages/Homepage/index';
import { Company } from './components/Pages/Company';
import {ReviewsForm} from "./components/ReviewsForm";
import {ReviewsEditForm} from "./components/ReviewsForm/Edit";
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { InterviewsForm } from './components/InterviewsForm';
import { Login } from './components/Login';
import {UserContext} from "./context/LoginContext";
import axios from "axios";
import {Register} from "./components/Register";
import {PrivateRoute} from "./common/PrivateRoute";
import {Profile} from "./components/Profile";
import { InterviewsEditForm } from './components/InterviewsForm/Edit';



function App() {
    const [user, setUser] = useContext(UserContext);

    useEffect(() => {
        (async () => {
            const { data } = await axios.get('http://localhost:5000/api/User', {withCredentials: true});
            //@ts-ignore
            setUser(data.email);
        })();
    }, []);

      return (
        <div>
          <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<Homepage />}/>
                <Route path='company/:name' element={<Company />}/>
                <Route path='company/:name/review' element={<PrivateRoute component={<ReviewsForm />}/>}/>
                <Route path='company/:name/interview' element={<PrivateRoute component={<InterviewsForm />}/>}/>
                <Route path='company/:name/review/edit' element={<PrivateRoute component={<ReviewsEditForm />}/>}/>
                <Route path='company/:name/interview/edit' element={<PrivateRoute component={<InterviewsEditForm />}/>}/>
                <Route path='login' element={<Login />}/>
                <Route path='register' element={<Register />}/>
                <Route path='profile/:email' element={<PrivateRoute component={<Profile />}/>}/>
            </Routes>
          </BrowserRouter>
          <ToastContainer style={{fontSize: '1.2rem'}}/>
        </div>
      );
}

export default App;
