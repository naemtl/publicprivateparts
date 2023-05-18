import { useEffect, useState, useCallback } from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!

import './CalendarHomepage.scss'

const SCOPES =
  "https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/calendar.readonly https://www.googleapis.com/auth/calendar.events https://www.googleapis.com/auth/calendar";

const CLIENT_ID = "https://calendar.google.com/calendar/ical/publicprivateparts.com%40gmail.com/public/basic.ics";

const API_KEY = "AIzaSyCRlStoGcJl87cYbW_M1X9ki_Vf7glLo70";

const CalendarHomepage = () => {
  const [events, setEvents] = useState(null);

  const listUpcomingEvents = useCallback(() => {
    window.gapi.client.calendar.events
      .list({
        // Fetch events from user's primary calendar
        calendarId: "primary",
        showDeleted: true,
        singleEvents: true,
      })
      .then(function (response) {
        let events = response.result.items;

        if (events.length > 0) {
          setEvents(formatEvents(events));
        }
      });
  }, []);

  const openSignInPopup = useCallback(() => {
    window.gapi.auth2.authorize(
      { client_id: CLIENT_ID, scope: SCOPES },
      (res) => {
        if (res) {
          if (res.access_token)
            localStorage.setItem("access_token", res.access_token);

          // Load calendar events after authentication
          window.gapi.client.load("calendar", "v3", listUpcomingEvents);
        }
      }
    );
  }, [listUpcomingEvents]);  
 
  const initClient = useCallback(() => {
    if (!localStorage.getItem("access_token")) {
      openSignInPopup();
    } else {
      // Get events if access token is found without sign in popup
      fetch(
        `https://www.googleapis.com/calendar/v3/calendars/primary/events?key=${API_KEY}&orderBy=startTime&singleEvents=true`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        }
      )
      .then((res) => {
        // Check if unauthorized status code is return open sign in popup
        if (res.status !== 401) {
          return res.json();
        } else {
          localStorage.removeItem("access_token");

          openSignInPopup();
        }
      })
      .then((data) => {
        if (data?.items) {
          setEvents(formatEvents(data.items));
        }
      });
     }
   }, [openSignInPopup]);

  const handleClientLoad = useCallback(() => {
    window.gapi.load("client:auth2", initClient);
  }, [initClient]);

  const formatEvents = (list) => {
    return list.map((item) => ({
      title: item.summary,
      start: item.start.dateTime || item.start.date,
      end: item.end.dateTime || item.end.date,
    }));
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.defer = true;
    script.src = "https://apis.google.com/js/api.js";

    document.body.appendChild(script);

    script.addEventListener("load", () => {
      if (window.gapi) handleClientLoad();
    });
  }, [handleClientLoad]);


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