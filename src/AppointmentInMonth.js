import React from "react";

const format_time = time => (time < 10 ? `0${time}:00` : `${time}:00`);
export default ({ time, patient, day }) => (
  <div className="appointment">
    <span className="time">{format_time(time)}</span>
    <span className="patient">{patient.name}</span>
    <span style={{color: "blue"}}> dag: {day}</span>
  </div>
);
