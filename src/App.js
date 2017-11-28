import React from 'react';
import { Component } from 'react';
import Calendar from '../components/calendar.js';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Link to={`calendar`}>
            Calendar
          </Link>
          <Route path="/calendar" component={Calendar} />
        </div>
      </Router>
    );
  }
}