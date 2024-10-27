import React, { useState, useEffect } from "react";
import "./index.scss";

const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

const Endsolver = () => {
  const [data, setData] = useState([]);
  const [sortByPriority, setSortByPriority] = useState(false);
  const [sortByDateTime, setSortByDateTime] = useState(false);

  useEffect(() => {
    fetch("https://backend-rail-cms-production.up.railway.app/api")
      .then((res) => res.json())
      .then((data) => {
        // Parse `solutionbyai` and set data state
        const parsedData = data.map((item) => ({
          ...item,
          solutionbyai: item.solutionbyai ? JSON.parse(item.solutionbyai) : null,
        }));
        setData(parsedData.reverse());
      });
  }, []);

  const handleSortByPriorityToggle = () => {
    setSortByPriority(!sortByPriority);
    // setSortByDateTime(false); // Reset date and time sorting when toggling priority sorting
  };

  const handleSortByDateTimeToggle = () => {
    setSortByDateTime(!sortByDateTime);
    // setSortByPriority(false); // Reset priority sorting when toggling date and time sorting
  };

  const sortedData = [...data].sort((a, b) => {
    if (sortByPriority) {
      return (a.solutionbyai?.priority || 0) - (b.solutionbyai?.priority || 0);
    }
    if (sortByDateTime) {
      return new Date(b.date) - new Date(a.date); // Sort by full date and time (latest first)
    }
    return 0; // No sorting
  });

  return (
    <>
      <div className="sorting-buttons">
        <button onClick={handleSortByPriorityToggle} className="sort-button">
          {sortByPriority ? "Unsort by Priority" : "Sort by Priority"}
        </button>
        <button onClick={handleSortByDateTimeToggle} className="sort-button">
          {sortByDateTime ? "Unsort by Date & Time" : "Sort by Date & Time"}
        </button>
      </div>
      <div className="thoughts-list">
        {sortedData.map((thought, index) => (
          <div className="thought-card" key={index}>
            {thought.img && (
              <img src={`data:image/png;base64,${thought.img}`} alt={thought.title} />
            )}
            <div className="thought-content">
              <h2>{thought.content}</h2>
              <h3>PNR: {thought.pnr}</h3>
              <h3>Title: {thought.title}</h3>
              <h3>Contact: {thought.contact}</h3>
              {thought.resolution === null ? (
                <h3>
                  Resolution Pending <span className="crs">❌</span>
                </h3>
              ) : (
                <h3>Resolution: {thought.resolution}</h3>
              )}
              <p>{thought.solutionbyai?.solution}</p>
              <span>Priority: {thought.solutionbyai?.priority || "N/A"}</span>
              <br />
              <span>{formatDate(thought.date)}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Endsolver;
