// import React, { useState } from 'react';

// function LogCommunicationModal({ company, onClose, onSubmit }) {
//   const [type, setType] = useState('');
//   const [date, setDate] = useState('');
//   const [notes, setNotes] = useState('');

//   const handleSubmit = () => {
//     onSubmit({ type, date, notes });
//     onClose();
//   };

//   return (
//     <div style={{ border: '1px solid black', padding: '20px', backgroundColor: 'white' }}>
//       <h2>Log Communication for {company.name}</h2>
//       <label>Type of Communication:</label>
//       <select value={type} onChange={(e) => setType(e.target.value)}>
//         <option value="">Select</option>
//         <option value="LinkedIn Post">LinkedIn Post</option>
//         <option value="Email">Email</option>
//         <option value="Phone Call">Phone Call</option>
//         <option value="Visit">Visit</option>
//       </select>
//       <br />
//       <label>Date:</label>
//       <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
//       <br />
//       <label>Notes:</label>
//       <textarea value={notes} onChange={(e) => setNotes(e.target.value)} />
//       <br />
//       <button onClick={handleSubmit}>Submit</button>
//       <button onClick={onClose}>Cancel</button>
//     </div>
//   );
// }

// export default LogCommunicationModal;


import React, { useState } from "react";

const LogCommunicationModal = ({ show, onClose, company, onSave }) => {
  const [communicationType, setCommunicationType] = useState("");
  const [date, setDate] = useState("");
  const [notes, setNotes] = useState("");

  if (!show) return null;

  const handleSubmit = () => {
    if (communicationType && date) {
      onSave({ communicationType, date, notes, companyId: company.id });
      onClose();
    } else {
      alert("Please fill in all required fields.");
    }
  };

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <h2>Log Communication</h2>
        <p>Company: {company.name}</p>

        <div>
          <label>Type of Communication:</label>
          <select
            value={communicationType}
            onChange={(e) => setCommunicationType(e.target.value)}
          >
            <option value="">Select</option>
            <option value="LinkedIn Post">LinkedIn Post</option>
            <option value="LinkedIn Message">LinkedIn Message</option>
            <option value="Email">Email</option>
            <option value="Phone Call">Phone Call</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label>Date of Communication:</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div>
          <label>Notes:</label>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          ></textarea>
        </div>

        <button onClick={handleSubmit}>Save</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "8px",
    width: "400px",
    maxWidth: "90%",
  },
};

export default LogCommunicationModal;
