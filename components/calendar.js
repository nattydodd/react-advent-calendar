import React from 'react';
import { Component } from 'react';
import Door from './door.js';
import ProgressBar from './progress-bar.js';
import ChristmasScene from './christmas-scene.js';

class Calendar extends Component {

  render() {
    return (
      <div className="calendar">
        This is a calendar
        <ProgressBar percent="10%" />
        <Door id="1"/>
        <ChristmasScene percent="10%" />
      </div>
    );
  }
}

export default Calendar;