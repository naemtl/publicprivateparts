import { useEffect, useState } from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!

import './CalendarHomepage.scss'

const SCOPES =
  "https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/calendar.readonly https://www.googleapis.com/auth/calendar.events https://www.googleapis.com/auth/calendar";

const CalendarHomepage = () => {
  const [events, setEvents] = useState(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.defer = true;
    script.src = "https://apis.google.com/js/api.js";

    document.body.appendChild(script);

    script.addEventListener("load", () => {
      // if (window.gapi) handleClientLoad();
    });
  }, []);

  return (
    <div className='calendar-homepage'>
      <h2 className='calendar-homepage__title'>Calendar of Events</h2>
      <div className='calendar-homepage__calendar-container'>
        <FullCalendar
          plugins={[ dayGridPlugin ]}
          initialView="dayGridMonth"
          events={events}
        />
      </div>
    </div>
  )
}

export default CalendarHomepage