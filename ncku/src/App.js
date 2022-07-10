
import React, { Component }  from 'react';
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route, 
  Routes, 
  Navigate
} from 'react-router-dom'
import { useEffect, useState } from "react";

//import './App.css';

//import HNavBar from './components/HNavBar';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home'
import Login from './pages/Login'
import Tests from './pages/Tests'
import TestsList from './pages/TestsList'






export const UserContext = React.createContext();

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = () => {
      fetch("http://localhost:5000/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
        .then((response) => {
          if (response.status === 200) return response.json();
          throw new Error("authentication has been failed!");
        })
        .then((resObject) => {
          setUser(resObject.user);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getUser();
  }, []);
  
  console.log(user)

  return (
    <>
      
      <Router>
      <Navbar user={user} />
        <UserContext.Provider value={user}>
          <Routes>
            {/* Directly routes user to home page */}
            <Route path="/" element={<Navigate replace to="/home" />} />
            <Route path='/home' exact element = {<Home/>} />
            {/* If user is logged in, navigate to home, if not, navigate to login */}
            <Route path='/login' exact element = {user ? <Navigate to="/" /> : <Login />} />

            {/* /tests routes the user to the list of tests for that user */}
            <Route path='/tests' exact element = {<TestsList />} />
            <Route path='/tests/:test_id' exact element = {<Tests />} />

            <Route path='/posts' />

    
          </Routes>
        </UserContext.Provider>
      </Router>
    </>
  );
}

export default App;
