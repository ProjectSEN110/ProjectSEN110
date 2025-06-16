import React, { useEffect, useState } from "react";

// Country to Time Zone mapping
const countryTimeZones = [
  { country: "United States", zone: "America/New_York" },
  { country: "Canada", zone: "America/Toronto" },
  { country: "Brazil", zone: "America/Sao_Paulo" },
  { country: "United Kingdom", zone: "Europe/London" },
  { country: "France", zone: "Europe/Paris" },
  { country: "Germany", zone: "Europe/Berlin" },
  { country: "Nigeria", zone: "Africa/Lagos" },
  { country: "South Africa", zone: "Africa/Johannesburg" },
  { country: "Russia", zone: "Europe/Moscow" },
  { country: "India", zone: "Asia/Kolkata" },
  { country: "China", zone: "Asia/Shanghai" },
  { country: "Japan", zone: "Asia/Tokyo" },
  { country: "Australia", zone: "Australia/Sydney" },
  { country: "New Zealand", zone: "Pacific/Auckland" },
  { country: "Mexico", zone: "America/Mexico_City" },
  { country: "United Arab Emirates", zone: "Asia/Dubai" },
  { country: "Turkey", zone: "Europe/Istanbul" },
  { country: "Egypt", zone: "Africa/Cairo" },
  { country: "Indonesia", zone: "Asia/Jakarta" },
  { country: "Pakistan", zone: "Asia/Karachi" },
];

function WorldClock() {
  const [selectedZone, setSelectedZone] = useState(countryTimeZones[6].zone);
  const [currentTime, setCurrentTime] = useState("");
  const [currentDate, setCurrentDate] = useState("");
  const [timePeriod, setTimePeriod] = useState("morning");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      const formattedTime = new Intl.DateTimeFormat("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
        timeZone: selectedZone,
      }).format(now);

      setCurrentTime(formattedTime);

      const formattedDate = new Intl.DateTimeFormat("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        timeZone: selectedZone,
      }).format(now);

      setCurrentDate(formattedDate);

      const hour = parseInt(
        new Intl.DateTimeFormat("en-US", {
          hour: "2-digit",
          hour12: false,
          timeZone: selectedZone,
        }).format(now)
      );

      if (hour >= 6 && hour < 12) {
        setTimePeriod("morning");
      } else if (hour >= 12 && hour < 18) {
        setTimePeriod("afternoon");
      } else {
        setTimePeriod("night");
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [selectedZone]);

  const handleChange = (e) => {
    setSelectedZone(e.target.value);
  };

  const getCountryName = (zone) =>
    countryTimeZones.find((item) => item.zone === zone)?.country || zone;

  const getImageSrc = () => {
    switch (timePeriod) {
      case "morning":
        return "/sunrise.png";
      case "afternoon":
        return "/sun.png";
      case "night":
        return "/moon.png";
      default:
        return "";
    }
  };

  return (
    <div style={{ ...styles.container, ...styles[timePeriod] }}>
      <h1>🌍 World Clock</h1>

      <select onChange={handleChange} value={selectedZone} style={styles.select}>
        {countryTimeZones.map(({ country, zone }) => (
          <option key={zone} value={zone}>
            {country}
          </option>
        ))}
      </select>

      <div style={styles.clockBox}>
        <h2>{getCountryName(selectedZone)}</h2>
        <p style={styles.date}>{currentDate}</p>
        <p style={styles.time}>{currentTime}</p>
        <img src={getImageSrc()} alt={timePeriod} style={styles.image} />
        <p style={styles.caption}>It's {timePeriod} here </p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    padding: "2rem",
    fontFamily: "Arial, sans-serif",
    transition: "background-color 0.3s ease",
    minHeight: "100vh",
  },
  select: {
    padding: "0.5rem",
    fontSize: "1rem",
    marginBottom: "1rem",
    borderRadius: "4px",
    width: "60%",
    maxWidth: "400px",
  },
  clockBox: {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "1rem",
    width: "280px",
    margin: "1rem auto",
    boxShadow: "2px 2px 8px rgba(0,0,0,0.1)",
    background: "white",
  },
  date: {
    fontSize: "1rem",
    margin: "0.5rem 0",
    color: "#777",
  },
  time: {
    fontSize: "2rem",
    fontWeight: "bold",
    margin: "0.5rem 0",
  },
  image: {
    width: "100px",
    height: "100px",
    margin: "1rem 0",
  },
  caption: {
    fontSize: "1rem",
    fontStyle: "italic",
    color: "#555",
  },
  morning: {
    backgroundColor: "#FFFAE5",
  },
  afternoon: {
    backgroundColor: "#E6F2FF",
  },
  night: {
    backgroundColor: "#1c1c2c",
    color: "#000000",
  },
};

export default WorldClock;
