import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { format } from "date-fns";

const CalendarView = ({ companies }) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const calendarEvents = companies.map((company) => ({
      title: `Next: ${company.nextCommunication}`,
      date: company.nextCommunication,
      description: `${company.name} - Next Communication`,
    }));
    setEvents(calendarEvents);
  }, [companies]);

  return (
    <div>
      <h2>Calendar View</h2>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={events}
        eventContent={(eventInfo) => (
          <div>
            <strong>{eventInfo.event.title}</strong>
            <p>{eventInfo.event.extendedProps.description}</p>
          </div>
        )}
      />
    </div>
  );
};

export default CalendarView;
