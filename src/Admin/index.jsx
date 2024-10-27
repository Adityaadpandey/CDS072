import React from "react";
import "./index.scss";

const Admin = () => {
  return (
    <div className="container">
      <div className="options">
        <a href="/manager">
          <div className="option-card">
            <h2 className="option-title">Security Tasks </h2>
            <p className="option-text"> </p>
          </div>
        </a>
        <a href="/user">
          <div className="option-card">
            <h2 className="option-title">User Tasks</h2>
            <p className="option-text"> </p>
          </div>
        </a>
        <a href="/endsolver">
          <div className="option-card">
            <h2 className="option-title">Tasks Manager</h2>
            <p className="option-text"> </p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Admin;
