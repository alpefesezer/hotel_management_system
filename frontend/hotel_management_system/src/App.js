import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import User from './components/User/User';
import Login from './components/User/Login';
import Signup from './components/User/Signup';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RoomPage from './components/RoomPage/RoomPage';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route exact path="/users/:userId" element={<User />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/rooms/:roomId" element={<RoomPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
