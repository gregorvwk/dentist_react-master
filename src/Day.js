import React from "react";
import "./Day.css";
import AppointmentInDay from "./AppointmentInDay";

export default ({ appointments, handleDelete }) => {
  const appointmentsJSX = appointments.map(
    ({ time, patient, dentist, assistant }, index) => (
      <AppointmentInDay
        time={time}
        patient={patient}
        dentist={dentist}
        assistant={assistant}
        key={index}
        handleDelete={handleDelete}
      />
    )
  );
    return <ul className="dayview">{appointmentsJSX}</ul>;
};
