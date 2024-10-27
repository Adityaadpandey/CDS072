import React, { useState, useEffect } from "react";
import "./index.scss";

const UserComplaints = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch user data from the API
    const fetchUserData = async () => {
      try {
        const response = await fetch(
          "https://backend-rail-cms-production.up.railway.app/api/user/getname/Gourav"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }
        const data = await response.json();
        setUserData(data[0]); // Since response is an array, use the first item
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="user-complaints">
      <h2>User Information</h2>
      <div className="user-info">
        <p><strong>Name:</strong> {userData.name}</p>
        <p><strong>Phone:</strong> {userData.phone}</p>
        <p><strong>Designation:</strong> {userData.designation}</p>
      </div>

      <h3>Assigned Tasks</h3>
      {userData.task.length > 0 ? (
        <div className="tasks-container">
          {userData.task.map((task) => (
            <div key={task._id} className="task-item">
              <div>
                <strong>Complaint ID:</strong> {task.complaintId}
              </div>
              <div>
                <strong>Description:</strong> {task.description}
              </div>
              <div>
                <strong>PNR:</strong> {task.pnr}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No tasks assigned.</p>
      )}
    </div>
  );
};

export default UserComplaints;
