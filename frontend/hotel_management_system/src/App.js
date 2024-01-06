import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import User from "./components/User/User";
import Login from "./components/User/Login";
import Signup from "./components/User/Signup";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import RoomPage from "./components/RoomPage/RoomPage";
import Footer from "./components/Footer/Footer";
import AdminPage from "./components/RoomPage/AdminPage";
import Filter from "./components/Filter/Filter";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route exact path="/users/:userId" element={<User />} />
          <Route
            exact
            path="/auth/login"
            element={
              localStorage.getItem("currentUser") != null ? (
                <Navigate to="/" />
              ) : (
                <Login />
              )
            }
          />
          <Route
            exact
            path="/auth/signup"
            element={
              localStorage.getItem("currentUser") != null ? (
                <Navigate to="/" />
              ) : (
                <Signup />
              )
            }
          />
          <Route exact path="/rooms/:roomId" element={<RoomPage />} />
          <Route exact path="/admin" element={<AdminPage />} />
          <Route exact path="/user" element={<User />} />
          <Route exact path="/filter" element={<Filter />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
      <div
        style={{ display: "flex", flexDirection: "column", minHeight: "10vh" }}
      ></div>
      <Footer />
    </div>
  );
}

export default App;
