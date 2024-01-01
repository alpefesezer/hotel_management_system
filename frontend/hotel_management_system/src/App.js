import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import User from './components/User/User';
import Login from './components/User/Login';
import Signup from './components/User/Signup';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom"
import RoomPage from './components/RoomPage/RoomPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route index element={<Home/>}></Route>
        <Route exact path='/users/:userId' element={<User/>}></Route>
        <Route exact path='/login' element={<Login/>}></Route>
        <Route exact path='/signup' element={<Signup/>}></Route>
        <Route exact path='/rooms/:roomId' element={<RoomPage />} />

      </Routes> 
      </BrowserRouter>
    </div>
  );
}

export default App;
