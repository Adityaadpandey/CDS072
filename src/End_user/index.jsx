import React, { useState, useEffect } from "react";
import "./index.scss";

const Enduser = () => {
  const [pnr, setPnr] = useState("");
  const [contact, setContact] = useState("");
  const [complaint, setComplaint] = useState("");
  const [station, setStation] = useState("");
  const [subStation, setSubStation] = useState("");
  const [formData, setFormData] = useState(null); 
  const [response, setResponse] = useState(null); 

 // List of main options
 const mainOptions = [
      // { label: "Complaint", value: "Complaint" },
      // { label: "Catering", value: "Catering" },
      { label: "Security", value: "Security" },
      // { label: "EnquiryCounter", value: "EnquiryCounter" },
      { label: "DirtyLinen", value: "DirtyLinen" },
      // { label: "SeatingAssignment", value: "SeatingAssignment" },
      // { label: "Powersupply", value: "Powersupply" },
    ];
  
  const subOptions = {
    // Complaint: ["general issue", "specific problem"],
    // Catering: ["hygiene", "quality or taste", "Delay"],
    Security: ["misbehaviour", "missing of things"],
    // EnquiryCounter: ["harsh behaviour"],
    DirtyLinen: ["no pillow, bedsheet provided", "replace/not clean"],
    // SeatingAssignment: ["Problem with co-passengers", "seat occupied by unknown"],
    // Powersupply: ["plug point", "ac/fan not working", "short circuit"],
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    
    const formattedData = {
        pnr: pnr,
        title: station, 
        content: complaint, 
        contact: contact,
    };

    
    setFormData(formattedData);
  };

  useEffect(() => {
    if (formData) {
  
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
            setComplaint("");
            setPnr("");
            setContact("");
            setSubStation("");
            setStation("");
            setFormData(null);
            setResponse(null);
            window.location.reload();
          }
        } catch (error) {
          console.error("Error submitting complaint:", error);
          console.log(formData);
        }
      };

      submitComplaint();
    }
  }, [formData]);

  return (
    <div className="p-container">
      <form className="form" onSubmit={handleSubmit}>
      <h2>Submit Your Train Complaint</h2>

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
          <label htmlFor="contact">Contact Number</label>
          <input
            type="text"
            id="contact"
            placeholder="Enter your Contact number"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />
        </div>
        <div className="input">
          <label htmlFor="station">Select Category</label>
          <select
            id="station"
            value={station}
            onChange={(e) => {
              setStation(e.target.value);
              setSubStation(""); 
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
                Select a Sub Category
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
        <span className="spn">
          *We will get the solution in least time possible
        </span>
      </form>
    </div>
  );
};

export default Enduser;
