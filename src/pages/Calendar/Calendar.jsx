import { useTranslation } from "react-i18next";

import "./Calendar.scss";

import { pastData, upcomingData } from "./data.js";

const Calendar = () => {
  const { t } = useTranslation("calendar");

  const buildGrid = (data) =>
    data.map((entry, i) => {
      const { date, project, venue, city, country, link } = entry;

      const displayInfoButton = (link) =>
        link === "-" ? (
          <div className="calendar__cell calendar__link">{link}</div>
        ) : (
          <a href={link} className="calendar__cell calendar__link">
            <div>{t("info")}</div>
          </a>
        );

      const pastEntry = checkIfDateHasPast(date) ? "calendar__entry--past" : "";
      return (
        <div key={i} className={`calendar__entry`}>
          <div className="calendar__cell">{date}</div>
          <div className="calendar__cell--project">{project}</div>
          <div className="calendar__cell">{venue}</div>
          <div className="calendar__cell">{city}</div>
          <div className="calendar__cell">{country}</div>
          {displayInfoButton(link)}
        </div>
      );
    });

  const checkIfDateHasPast = (date) => {
    const currentDate = new Date();
    const calendarDate = new Date(date);

    return calendarDate < currentDate;
  };

  return (
    <div className="calendar">
      <h1 className="calendar__title">{t("title")}</h1>
      <h3>{t("upcoming")}</h3>
      <div className="calendar__container">
        <div className="calendar__heading">
          <div className="calendar__cell">Date</div>
          <div className="calendar__cell--project">Project</div>
          <div className="calendar__cell">Venue</div>
          <div className="calendar__cell">City</div>
          <div className="calendar__cell">Country</div>
          <div className="calendar__cell">Link</div>
        </div>
        {buildGrid(upcomingData)}
      </div>
      <h3>{t("past")}</h3>
      <div className="calendar__container">
        <div className="calendar__heading">
          <div className="calendar__cell">Date</div>
          <div className="calendar__cell--project">Project</div>
          <div className="calendar__cell">Venue</div>
          <div className="calendar__cell">City</div>
          <div className="calendar__cell">Country</div>
          <div className="calendar__cell">Link</div>
        </div>
        {buildGrid(pastData)}
      </div>
    </div>
  );
};

export default Calendar;
