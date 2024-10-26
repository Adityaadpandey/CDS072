import React, { useState } from "react"; // Import useState here
import "./index.scss";

const Enduser = () => {
  const [pnr, setPnr] = useState("");
  const [complaint, setComplaint] = useState("");
  const [station, setStation] = useState("");
  const [subStation, setSubStation] = useState("");


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
    security: ["misbehaviour", "missing of things",],
    EnquiryCounter: ["harsh behaviour"],
    DirtyLinen:["no pillow,bedsheet provided","replace/not clean"],
    SecurityAssignment:["Problem with co-passengers","seat occupied by unknown"],
    Powersupply:["plug point","ac/fan not working","short circuit"]
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the submission logic here
    console.log("PNR:", pnr);
    console.log("Complaint:", complaint);
    console.log("Selected Region:", station);
    console.log("Selected Sub-Station:", subStation);
  };

  return (
    <div className="p-container">
      <h1>Submit Your Train Complaint</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="input">
          <label htmlFor="pnr">Train PNR Number</label>
          <input
            type="text"
            id="pnr"
            placeholder="Enter your PNR number"
            value={pnr}
            onChange={(e) => setPnr(e.target.value)}
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
            <label htmlFor="subStation">Select Railway Station</label>
            <select
              id="subStation"
              value={subStation}
              onChange={(e) => setSubStation(e.target.value)}
            >
              <option value="" disabled>Select a station</option>
              {subOptions[station].map((st, index) => (
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
        <button type="submit" className="submit-button">Submit Complaint</button>
      </form>
    </div>
  );
};

export default Enduser;