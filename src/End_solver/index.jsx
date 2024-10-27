import React, { useState, useEffect } from "react";
import "./index.scss";

const formatDate = (date) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(date).toLocaleDateString("en-US", options);
};

const Endsolver = () => {
  const [data, setData] = useState([]);
  const [sortByPriority, setSortByPriority] = useState(false);

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

  const handleSortToggle = () => {
    setSortByPriority(!sortByPriority);
  };

  const sortedData = sortByPriority
    ? [...data].sort((a, b) => (a.solutionbyai?.priority || 0) - (b.solutionbyai?.priority || 0))
    : data;

  return (
    <>
      <button onClick={handleSortToggle} className="sort-button">
        {sortByPriority ? "Unsort by Priority" : "Sort by Priority"}
      </button>
      <div className="thoughts-list">
        {sortedData.map((thought, index) => (
          <div className="thought-card" key={index}>
            {/* Decode and display the base64 image */}
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
