import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./Home";
import Calendar from "./Calendar";
import Day from "./Day";

const App = (props) => (
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/calendar">Calendar view</Link>
          </li>
          <li>
            <Link to="/day">Day view</Link>
          </li>
        </ul>
      </nav>
      <main>
        <Switch>
          <Route path="/calendar">
            <Calendar appointments={props.appointments} />
          </Route>
          <Route path="/day">
            <Day appointments={props.appointments.filter(app => app.day === 1)} handleDelete={props.handleDelete} />
          </Route>
          <Route path="/" >
            <Home employees={props} handleClick={props}/>
          </Route>
        </Switch>
      </main>
    </div>
  </Router>
);
export default App;
