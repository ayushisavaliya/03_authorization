import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutAsync } from "../redux/authSlice";

const UserLandingPage = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logoutAsync());
  };
  return (
    <div
      style={{
        textAlign: "center",
        padding: "50px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1>Welcome, User!</h1>
      <p>Enjoy your personalized experience.</p>
      <button
        onClick={handleLogout}
        style={{
          padding: "10px 20px",
          backgroundColor: "#007BFF",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        disabled={loading}
      >
        {loading ? 'Logging out...' : 'Logout'}
      </button>
    </div>
  );
};

export default UserLandingPage;
