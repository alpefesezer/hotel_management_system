import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import User from './components/User/User';
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route exact path='/users/:userId' element={<User/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
