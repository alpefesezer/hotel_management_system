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
      {/* BrowserRouter wraps the entire application */}
      <BrowserRouter>
        {/* Navigation bar component */}
        <Navbar />

        {/* Routing setup using React Router */}
        <Routes>
          {/* Home page route */}
          <Route index element={<Home />} />

          {/* User page route */}
          <Route exact path="/users/:userId" element={<User />} />

          {/* Login route with conditional rendering based on user authentication */}
          <Route
            exact
            path="/auth/login"
            element={
              localStorage.getItem("currentUser") != null ? (
                // Redirect to home if user is already authenticated
                <Navigate to="/" />
              ) : (
                <Login />
              )
            }
          />

          {/* Signup route with conditional rendering based on user authentication */}
          <Route
            exact
            path="/auth/signup"
            element={
              localStorage.getItem("currentUser") != null ? (
                // Redirect to home if user is already authenticated
                <Navigate to="/" />
              ) : (
                <Signup />
              )
            }
          />

          {/* Room page route */}
          <Route exact path="/rooms/:roomId" element={<RoomPage />} />

          {/* Admin page route */}
          <Route exact path="/admin" element={<AdminPage />} />

          {/* User page route (repeated) - Consider removing one */}
          <Route exact path="/user" element={<User />} />

          {/* Filter page route */}
          <Route exact path="/filter" element={<Filter />} />

          {/* Contact page route */}
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>

      {/* Placeholder for some content (consider updating comment) */}
      <div
        style={{ display: "flex", flexDirection: "column", minHeight: "10vh" }}
      ></div>

      {/* Footer component */}
      <Footer />
    </div>
  );
}

export default App;
