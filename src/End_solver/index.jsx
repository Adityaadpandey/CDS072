import React, { useState, useEffect } from "react";
import "./index.scss";

const formatDate = (dateString) => {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

const Endsolver = () => {
  const [data, setData] = useState([]);
  const [sortByPriority, setSortByPriority] = useState(false);
  const [sortByDate, setSortByDate] = useState(false);

  useEffect(() => {
    fetch("https://backend-rail-cms-production.up.railway.app/api")
      .then((res) => res.json())
      .then((data) => {
        // Parse `solutionbyai` and set data state
        const parsedData = data.map((item) => {
          let parsedSolution;
          try {
            // Trim any whitespace/newlines from the solutionbyai string before parsing
            parsedSolution = item.solutionbyai 
              ? JSON.parse(item.solutionbyai.trim()) 
              : null;
          } catch (error) {
            console.error("Error parsing solutionbyai:", item.solutionbyai, error);
            parsedSolution = null; // Handle as needed
          }
  
          return {
            ...item,
            solutionbyai: parsedSolution,
          };
        });
        setData(parsedData.reverse());
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  
  const handleSortByPriorityToggle = () => {
    setSortByPriority(!sortByPriority);
  };

  const handleSortByDateToggle = () => {
    setSortByDate(!sortByDate);
  };

  const sortedData = [...data].sort((a, b) => {
    if (sortByPriority) {
      return (a.solutionbyai?.priority || 0) - (b.solutionbyai?.priority || 0);
    }
    if (sortByDate) {
      return new Date(b.date) - new Date(a.date);
    }
    return 0;
  });

  return (
    <>
      <div className="sorting-buttons">
        <button onClick={handleSortByPriorityToggle} className="sort-button">
          {sortByPriority ? "Unsort by Priority" : "Sort by Priority"}
        </button>
        <button onClick={handleSortByDateToggle} className="sort-button">
          {sortByDate ? "Unsort by Date" : "Sort by Date"}
        </button>
      </div>
      <div id="hi">
      <div className="thoughts-list">
        {sortedData.map((thought, index) => (
          <div className="thought-card" key={index}>
            {thought.img && (
              <img
                src={`data:image/png;base64,${thought.img}`}
                alt={thought.title}
              />
            )}
            <div className="thought-content">
              <h2>{thought.content}</h2>
              <h3>PNR: {thought.pnr}</h3>
              {/* <h3>Title: {thought.title}</h3> */}
              <h3>Contact: {thought.contact}</h3>
              {thought.resolution === false ? (
                <h3>
                  {/* Resolution Pending <span className="crs">❌</span> */}
                </h3>
              ) : (
                <h3>Resolution: {thought.resolution}</h3>
              )}
              <p>{thought.solutionbyai?.solution}</p>
              <span>Priority: {thought.solutionbyai?.priority+"/10" || "N/A"}</span>
              <br />
              <span>{formatDate(thought.date)}</span>
            </div>
          </div>
        ))}
      </div>
      </div>
    </>
  );
};

export default Endsolver;
