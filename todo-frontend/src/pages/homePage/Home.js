import React from "react";
import { useSelector } from "react-redux";
import Logout from "../../components/Logout/Logout.js";
import Todos from "../Todos/Todos"; 
import "./home.scss";
import { Link } from "react-router-dom";

const Home = () => {
  const user = useSelector((state) => state.auth?.user);

  return (
    <div className="home-container">
      {user ? (
        <>
          <h2>Welcome, {user.name} 👋</h2>
          <Todos />
          <div className="logout-wrapper">
            <Logout />
          </div>
        </>
      ) : (
        <div className="guest-container">
          <p className="guest-message">
            Welcome to the Todo App. Please log in or sign up first!
          </p>
          <Link to="/auth" className="login-btn">
            Sign In / Sign Up
          </Link>
        </div>
      )}
    </div>
  );
};

export default Home;
