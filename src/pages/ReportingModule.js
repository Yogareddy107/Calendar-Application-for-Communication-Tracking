import React from "react"; // Import React
import CommunicationFrequencyChart from "../components/CommunicationFrequencyChart"; // Import your chart component

const ReportingModule = () => {
  return (
    <div>
      <h1>Reporting and Analytics</h1> {/* Page Title */}
      <CommunicationFrequencyChart /> {/* Chart Component */}
    </div>
  );
};

export default ReportingModule; // Export the page
