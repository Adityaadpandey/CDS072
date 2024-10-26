import React, { useState, useEffect } from "react";
import "./index.scss";

const formatDate = (date) => {//+
  const options = { year: "numeric", month: "long", day: "numeric" };//+
  return new Date(date).toLocaleDateString("en-US", options);//+
};//+
const Endsolver = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://backend-rail-cms-production.up.railway.app/api")
      .then((res) => res.json())
      .then((data) => setData(data.reverse()));
  }, []);
  return (
    <>
      <div className="thoughts-list">
        {data.map((thought, index) => (
          <div className="thought-card" key={index}>
            {/* <img src={thought.img} alt={thought.title} /> */}

            <div className="thought-content">
              <h2>{thought.content}</h2>
              <h3>{thought.pnr}</h3>
              <h3>{thought.title}</h3>
              <h3>{thought.contact}</h3>
              {thought.resolution === null && <h3>Resolution Pending <span className="crs">❌</span></h3>}
              <p>{thought.solutionbyai}</p>
              {/* <p>{thought.solutionbyai.solution}</p> */}
              <span>{formatDate(thought.date)}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Endsolver;
