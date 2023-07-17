import "./Calendar.scss";

const data = [
  {
    date: "2023.01.01",
    project: "Principle of Pleasure",
    venue: "Usine C",
    city: "Montreal",
    country: "Canada",
    link: "https://www.gerardxreyes.com/",
  },
  {
    date: "2023.01.01",
    project: "Principle of Pleasure",
    venue: "Usine C",
    city: "Montreal",
    country: "Canada",
    link: "https://www.gerardxreyes.com/",
  },
  {
    date: "2023.01.01",
    project: "Principle of Pleasure",
    venue: "Usine C",
    city: "Montreal",
    country: "Canada",
    link: "https://www.gerardxreyes.com/",
  },
];

const Calendar = () => {
  const buildGrid = (data) =>
    data.map((entry) => {
      const { date, project, venue, city, country, link } = entry;
      return (
        <div className="calendar__entry">
          <div className="calendar__cell">{date}</div>
          <div className="calendar__cell--project">{project}</div>
          <div className="calendar__cell">{venue}</div>
          <div className="calendar__cell">{city}</div>
          <div className="calendar__cell">{country}</div>
          <a href={link} className="calendar__cell calendar__link">
            <div>Info</div>
          </a>
        </div>
      );
    });

  return (
    <div className="calendar">
      <div className="calendar__container">
        <div className="calendar__heading">
          <div className="calendar__cell">Date</div>
          <div className="calendar__cell--project">Project</div>
          <div className="calendar__cell">Venue</div>
          <div className="calendar__cell">City</div>
          <div className="calendar__cell">Country</div>
          <div className="calendar__cell">Link</div>
        </div>
        {buildGrid(data)}
      </div>
    </div>
  );
};

export default Calendar;
