import React from 'react';
import { Component } from 'react';
import Door from './door.js';
import ProgressBar from './progress-bar.js';
import ChristmasScene from './christmas-scene.js';

const doors = (() => {
    let doorArray = [];
    for (let i = 1; i < 26; i++) {
      doorArray.push(i);
    }
    return doorArray;
  })();
class Calendar extends Component {

  constructor() {
    super();
  }

  renderDoors() {
    return doors.map((door) => {
      return (
        <Door id={door} key={`door${door}`}/>
      )
    });
  }

  render() {
    return (
      <div className="calendar">
        This is a calendar
        <ProgressBar percent="10%" />
        {this.renderDoors()}
        <ChristmasScene percent="10%" />
      </div>
    );
  }
}

export default Calendar;