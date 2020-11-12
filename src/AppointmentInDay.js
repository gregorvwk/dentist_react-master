import React from "react";

const format_time = time => (time < 10 ? `0${time}:00u` : `${time}:00u`);
const artsIsZiek = dentist => {
  if(dentist.isZiek === true){
    const isZiek = {
      background: "red"
    }
    return isZiek
  }
}

export default ({ time, patient, dentist, assistant, handleDelete }) => (
  <li className="appointment" style={artsIsZiek(dentist)}>
    <div className="time">{format_time(time)}</div>
    <div className="patient">Patiënt: {patient.name} <button onClick={() => handleDelete(patient, true)}>Ziek</button></div>
    <div className="dentist">Tandarts: {dentist.name} <button onClick={() => handleDelete(patient, time)}>verwijder afspraak</button></div>
    <div className="assistant">Assistent: {assistant.name}</div>
  </li>
);
