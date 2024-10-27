import React, { useState, useEffect } from "react";
import "./index.scss";

const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

const Manageuser = () => {
  const [securityTasks, setSecurityTasks] = useState([]);
  const [hasNewTask, setHasNewTask] = useState(false);

  useEffect(() => {
    // Function to fetch security tasks from the API
    const fetchSecurityTasks = () => {
      fetch("https://backend-rail-cms-production.up.railway.app/api")
        .then((res) => res.json())
        .then((data) => {
          // Filter tasks based on the title "security" and reverse the order
          const filteredTasks = data
            .filter((task) => task.title && task.title.toLowerCase() === "security")
            .reverse(); // Reverse the order here

          // If there is a new task, update the state
          if (filteredTasks.length > 0) {
            setSecurityTasks(filteredTasks);
            setHasNewTask(true); // Indicate there's a new task
          }
        })
        .catch((error) => console.error("Error fetching security tasks:", error));
    };

    // Set an interval to check for new tasks every 5 seconds
    const intervalId = setInterval(fetchSecurityTasks, 5000);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="security-tasks-page">
      <h1>Security Tasks</h1>
      {hasNewTask ? (
        <div className="new-task-alert">
          <h2>🚨 New Security Tasks Available 🚨</h2>
          {securityTasks.map((task, index) => (
            <div className="task-card" key={task._id || index}>
              <h3>Title: {task.title}</h3>
              <p>PNR: {task.pnr}</p>
              <p>Content: {task.content}</p>
              <p>Contact: {task.contact}</p>
              <p>Resolution Status: {task.resolution ? task.resolution : "Pending"}</p>
              <p>AI Solution: {task.solutionbyai && JSON.parse(task.solutionbyai).solution}</p>
              <p>Priority: {task.solutionbyai ? JSON.parse(task.solutionbyai).priority + "/10" : "N/A"}</p>
              <span>Date: {formatDate(task.date)}</span>
            </div>
          ))}
        </div>
      ) : (
        <p>No new security tasks at the moment.</p>
      )}
    </div>
  );
};

export default Manageuser;
