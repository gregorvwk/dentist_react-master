import React from "react";
import "./App.css";



export default (props) => {
    const employees = props.employees.employees
    return (
    <div>
        <h1>Tandartsen praktijk de flinke kegel</h1>
        <h3>Tandarts: {employees.tandarts[0].name + " " + employees.tandarts[0].surname}</h3>
        <button onClick={() => props.handleClick.handleClick(employees.tandarts[0].id)}>Ziek</button>
        <h3>Tandarts: {employees.tandarts[1].name + " " + employees.tandarts[1].surname}</h3>
        <button onClick={() => props.handleClick.handleClick(employees.tandarts[1].id)}>Ziek</button>
        <h3>Tandarts: {employees.tandarts[2].name + " " + employees.tandarts[2].surname}</h3>
        <button onClick={() => props.handleClick.handleClick(employees.tandarts[2].id)}>Ziek</button>
        <h3>Tandarts: {employees.tandarts[3].name + " " + employees.tandarts[3].surname}</h3>
        <button onClick={() => props.handleClick.handleClick(employees.tandarts[3].id)}>Ziek</button>
        <h4>Assistenten: {employees.assistent[0].name + " " + employees.assistent[0].surname}</h4>
        <h4>Assistenten: {employees.assistent[1].name + " " + employees.assistent[1].surname}</h4>
    </div>
    )
}
