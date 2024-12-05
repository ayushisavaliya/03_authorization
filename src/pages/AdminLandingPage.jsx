import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutAsync } from "../redux/authSlice";

const AdminLandingPage = () => {
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
      <h1>Welcome, Admin!</h1>
      <p>You have full control over the system.</p>
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
      >
        {loading ? 'Logging out...' : 'Logout'}
      </button>
    </div>
  );
};

export default AdminLandingPage;
