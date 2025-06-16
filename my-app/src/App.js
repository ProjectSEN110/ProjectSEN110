import React, { useReducer, useState, useEffect, useRef } from "react";
import './App.css';

const initialState = {
  alarms: []
};

function alarmReducer(state, action) {
  switch (action.type) {
    case "ADD_ALARM":
      return { ...state, alarms: [...state.alarms, action.payload] };
    case "REMOVE_ALARM":
      return {
        ...state,
        alarms: state.alarms.filter((_, index) => index !== action.payload)
      };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(alarmReducer, initialState);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [newAlarm, setNewAlarm] = useState("");
  const activeAlarmsRef = useRef([]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    state.alarms.forEach((alarm, index) => {
      const alarmTime = new Date(alarm);
      if (
        currentTime.getHours() === alarmTime.getHours() &&
        currentTime.getMinutes() === alarmTime.getMinutes() &&
        currentTime.getSeconds() === alarmTime.getSeconds()
      ) {
        if (!activeAlarmsRef.current.includes(index)) {
          alert(`⏰ Alarm ringing for ${alarmTime.toLocaleTimeString()}`);
          activeAlarmsRef.current.push(index);
        }
      }
    });
  }, [currentTime, state.alarms]);

  const addAlarm = () => {
    if (newAlarm) {
      dispatch({ type: "ADD_ALARM", payload: new Date(newAlarm) });
      setNewAlarm("");
    }
  };

  const removeAlarm = (index) => {
    dispatch({ type: "REMOVE_ALARM", payload: index });
    activeAlarmsRef.current = activeAlarmsRef.current.filter(i => i !== index);
  };

  const secondDeg = currentTime.getSeconds() * 6;
  const minuteDeg = currentTime.getMinutes() * 6 + currentTime.getSeconds() * 0.1;
  const hourDeg = ((currentTime.getHours() % 12) * 30) + (currentTime.getMinutes() * 0.5);

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "30px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ marginBottom: "10px" }}>⏰ Alarm Clock</h1>

      <div style={{
        position: "relative",
        width: "250px",
        height: "250px",
        border: "10px solid #333",
        borderRadius: "50%",
        marginBottom: "20px",
        backgroundColor: "#f4f4f4"
      }}>
        <div style={{
          position: "absolute", width: "6px", height: "80px",
          backgroundColor: "#333", top: "45px", left: "calc(50% - 3px)",
          transformOrigin: "bottom center",
          transform: `rotate(${hourDeg}deg)`
        }} />
        <div style={{
          position: "absolute", width: "4px", height: "100px",
          backgroundColor: "#666", top: "25px", left: "calc(50% - 2px)",
          transformOrigin: "bottom center",
          transform: `rotate(${minuteDeg}deg)`
        }} />
        <div style={{
          position: "absolute", width: "2px", height: "110px",
          backgroundColor: "red", top: "15px", left: "calc(50% - 1px)",
          transformOrigin: "bottom center",
          transform: `rotate(${secondDeg}deg)`
        }} />
        <div style={{
          position: "absolute", width: "15px", height: "15px",
          backgroundColor: "#000", borderRadius: "50%",
          top: "calc(50% - 7.5px)", left: "calc(50% - 7.5px)"
        }} />
      </div>

      <h2 style={{ marginBottom: "20px" }}>
        Digital Time: {currentTime.toLocaleTimeString()}
      </h2>

      <div style={{ marginBottom: "20px" }}>
        <input
          type="datetime-local"
          value={newAlarm}
          onChange={(e) => setNewAlarm(e.target.value)}
          style={{ padding: "8px", fontSize: "16px", marginRight: "10px" }}
        />
        <button onClick={addAlarm} style={{ padding: "8px 16px", fontSize: "16px", cursor: "pointer" }}>
          Set Alarm
        </button>
      </div>

      <ul style={{ listStyle: "none", padding: 0, width: "300px" }}>
        {state.alarms.map((alarm, index) => (
          <li key={index} style={{
            background: "#eaeaea",
            padding: "10px",
            marginBottom: "10px",
            borderRadius: "5px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}>
            {new Date(alarm).toLocaleString()}
            <button onClick={() => removeAlarm(index)} style={{ background: "red", color: "white", border: "none", padding: "5px 10px", cursor: "pointer" }}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
