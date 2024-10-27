import React, { useState, useEffect } from "react";
import "./index.scss";

const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

<<<<<<< HEAD
  // List of main options
  const mainOptions = [
    { label: "Complaint", value: "complaint" },
    { label: "Catering", value: "Catering" },
    { label: "Security", value: "security" },
    { label: "EnquiryCounter", value: "EnquiryCounter" },
    { label: "DirtyLinen", value: "DirtyLinen" },
    { label: "SeatingAssignment", value: "SeatingAssignment" },
    { label: "Powersupply", value: "Powersupply" },
  ];

  // Sub-options based on main selection
  const subOptions = {
    Catering: ["hygiene", "quality or taste", "Delay"],
    Hygiene: ["washroom", "compartment"],
    security: ["misbehaviour", "missing of things"],
    EnquiryCounter: ["harsh behaviour"],
    DirtyLinen: ["no pillow,bedsheet provided", "replace/not clean"],
    SeatingAssignment: [
      "Problem with co-passengers",
      "seat occupied by unknown",
    ],
    Powersupply: ["plug point", "ac/fan not working", "short circuit"],
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Store form data in state to trigger API call in useEffect
    setFormData({
      pnr: pnr,
      content: complaint + " " + station + " " + subStation,
      title: station,
      contact: contact,
    });
  };

  useEffect(() => {
    if (formData) {
      // Perform API call with form data
      const submitComplaint = async () => {
        try {
          const res = await fetch(
            "https://backend-rail-cms-production.up.railway.app/api/add",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(formData),
            }
          );
          const data = await res.json();
          setResponse(data);
          if (data.pnr === pnr) {
            alert("Complaint submitted successfully!");
            setFormData(null);
            setResponse(null);
            window.location.reload();
          }
        } catch (error) {
          console.error("Error submitting complaint:", error);
        }
      };
=======
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
>>>>>>> 3e855a4e02f1e6861639d6b54dc3f44f4e3feb4f

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
