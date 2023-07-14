import "./Calendar.scss";

const data = [
  {
    date: "2023.01.01",
    project: "Principle of Pleasure",
    venue: "Usine C",
    city: "Montreal",
    country: "Canada",
    link: "test-1",
  },
  {
    date: "2023.01.01",
    project: "Principle of Pleasure",
    venue: "Usine C",
    city: "Montreal",
    country: "Canada",
    link: "test-2",
  },
  {
    date: "2023.01.01",
    project: "Principle of Pleasure",
    venue: "Usine C",
    city: "Montreal",
    country: "Canada",
    link: "test-3",
  },
];

const Calendar = () => {
  const buildGrid = (data) =>
    data.map((entry) => {
      const { date, project, venue, city, country, link } = entry;
      return (
        <div className="calendar__entry">
          <div>{date}</div>
          <div>{project}</div>
          <div>{venue}</div>
          <div>{city}</div>
          <div>{country}</div>
          <div>{link}</div>
        </div>
      );
    });

  return (
    <div className="calendar">
      <div className="calendar__container">
        <div className="calendar__heading">
          <div>Date</div>
          <div>Project</div>
          <div>Venue</div>
          <div>City</div>
          <div>Country</div>
          <div>Link</div>
        </div>
        {buildGrid(data)}
      </div>
    </div>
  );
};

export default Calendar;
