import React, { useState } from "react";
import LogCommunicationModal from "./LogCommunicationModal";

const Notifications = ({ companies, onUpdateCommunication }) => {
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const today = new Date().toISOString().split("T")[0];

  // Filter overdue and today's tasks
  const overdue = companies.filter((company) => company.nextCommunication < today);
  const dueToday = companies.filter((company) => company.nextCommunication === today);

  const handleLogCommunication = (company) => {
    setSelectedCompany(company);
    setShowModal(true);
  };

  const handleSave = (data) => {
    onUpdateCommunication(data);
  };

  return (
    <div>
      <h2>Notifications</h2>

      <div>
        <h3>Overdue Communications</h3>
        {overdue.length > 0 ? (
          <ul>
            {overdue.map((company) => (
              <li key={company.id}>
                {company.name} (Due: {company.nextCommunication}){" "}
                <button onClick={() => handleLogCommunication(company)}>Log Communication</button>
              </li>
            ))}
          </ul>
        ) : (
          <p>No overdue communications.</p>
        )}
      </div>

      <div>
        <h3>Today's Communications</h3>
        {dueToday.length > 0 ? (
          <ul>
            {dueToday.map((company) => (
              <li key={company.id}>
                {company.name} (Due: {company.nextCommunication}){" "}
                <button onClick={() => handleLogCommunication(company)}>Log Communication</button>
              </li>
            ))}
          </ul>
        ) : (
          <p>No communications due today.</p>
        )}
      </div>

      <LogCommunicationModal
        show={showModal}
        onClose={() => setShowModal(false)}
        company={selectedCompany}
        onSave={handleSave}
      />
    </div>
  );
};

export default Notifications;
