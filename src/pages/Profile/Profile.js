import React from "react";
import "./Profile.css";
import { useAuth } from "../../auth";
import { useNavigate } from "react-router-dom";
const Profile = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const handleLogout = () => {
    auth.logout();
    navigate("/");
  };
  return (
    <div>
      <h1>Welcome {auth.user} !</h1>
      <button onClick={handleLogout} className="btn btn-danger">
        Logout
      </button>
    </div>
  );
};

export default Profile;
