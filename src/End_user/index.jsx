import React, { useState, useEffect } from "react";
import "./index.scss";

const Enduser = () => {
  const [pnr, setPnr] = useState("");
  const [contact, setContact] = useState("");
  const [complaint, setComplaint] = useState("");
  const [station, setStation] = useState("");
  const [subStation, setSubStation] = useState("");
  const [formData, setFormData] = useState(null); // Store form data for API call
  const [response, setResponse] = useState(null); // Store API response

  // List of main options
  const mainOptions = [
    { label: "Complaint", value: "complaint" },
    { label: "Catering", value: "Catering" },
    { label: "Security", value: "security" },
    { label: "EnquiryCounter", value: "EnquiryCounter" },
    { label: "DirtyLinen", value: "DirtyLinen" },
    { label: "SeatingAssignment", value: "seatingAssignment" },
    { label: "Powersupply", value: "Powersupply" },
  ];

  // Sub-options based on main selection
  const subOptions = {
    Catering: ["hygiene", "quality or taste", "Delay"],
    Hygiene: ["washroom", "compartment"],
    security: ["misbehaviour", "missing of things"],
    EnquiryCounter: ["harsh behaviour"],
    DirtyLinen: ["no pillow,bedsheet provided", "replace/not clean"],
    SecurityAssignment: [
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

      submitComplaint();
    }
  }, [formData]);

  return (
    <div className="p-container">
      <h1>Submit Your Train Complaint</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="input">
          <label htmlFor="pnr">PNR Number</label>
          <input
            type="text"
            id="pnr"
            placeholder="Enter your PNR number"
            value={pnr}
            onChange={(e) => setPnr(e.target.value)}
          />
        </div>
        <div className="input">
          <label htmlFor="pnr">Contact Number</label>
          <input
            type="text"
            id="contact"
            placeholder="Enter your Contact number"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />
        </div>
        <div className="input">
          <label htmlFor="station">Select Region</label>
          <select
            id="station"
            value={station}
            onChange={(e) => {
              setStation(e.target.value);
              setSubStation(""); // Reset sub-station when main option changes
            }}
          >
            {mainOptions.map((option, index) => (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        {station && (
          <div className="input">
            <label htmlFor="subStation">Select Sub Category</label>
            <select
              id="subStation"
              value={subStation}
              onChange={(e) => setSubStation(e.target.value)}
            >
              <option value="" disabled>
                Select a station
              </option>
              {subOptions[station]?.map((st, index) => (
                <option key={index} value={st}>
                  {st}
                </option>
              ))}
            </select>
          </div>
        )}
        <div className="input">
          <label htmlFor="complaint">Complaint Details</label>
          <textarea
            id="complaint"
            placeholder="Describe your complaint here"
            value={complaint}
            onChange={(e) => setComplaint(e.target.value)}
          ></textarea>
        </div>
        <button type="submit" className="submit-button">
          Submit Complaint
        </button>
      </form>
      {response && <div className="response">Response: {response.message}</div>}
    </div>
  );
};

export default Enduser;
