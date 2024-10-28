import React from "react";
import "./index.scss";

const Admin = () => {
  return (
      <div className="container">
          <h1>Admin Panel</h1>
      <div className="options">
        <a href="/manager">
          <div className="option-card">
            <h2 className="option-title">Security Tasks </h2>
            <p className="option-text">Manage and oversee security-related tasks to ensure the safety and integrity of railway operations. Our platform provides tools for monitoring, reporting, and addressing security concerns effectively. </p>
          </div>
        </a>
        <a href="/user">
          <div className="option-card">
            <h2 className="option-title">User Tasks</h2>
            <p className="option-text"> Report and resolve your railway complaints efficiently. Our platform ensures prompt attention to issues such as delays, cancellations, and service quality, helping you get the support you need.</p>
          </div>
        </a>
        <a href="/endsolver">
          <div className="option-card">
            <h2 className="option-title">Tasks Manager</h2>
            <p className="option-text">Efficiently organize and prioritize your tasks to enhance productivity. Our platform offers tools for tracking progress, setting deadlines, and collaborating with team members to ensure timely completion of all tasks. </p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Admin;
