import React from 'react';
import { Component } from 'react';
import Calendar from '../components/calendar.js';

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Calendar />
      </div>
    );
  }
}