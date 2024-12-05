import React from 'react';
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <header style={{ backgroundColor: "#f5f5f5", padding: "10px 0" }}>
        <h1>Welcome to My App</h1>
        <p>Role-Based Access Demo</p>
      </header>

      <main style={{ padding: "20px" }}>
        <section>
          <Link to="/login">
            <button
              style={{
                padding: "10px 20px",
                backgroundColor: "#007BFF",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                marginTop: "20px",
              }}
            >
              Get Started
            </button>
          </Link>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
