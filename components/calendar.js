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

  handleUpdateProgress(newProgress) {
    let percentage = newProgress / 25 * 100;
    console.log(`updating`, percentage);
    return percentage;
  }

  renderDoors() {
    return doors.map((door) => {
      return (
        <Door
          id={door}
          key={`door${door}`}
          updateProgress={this.handleUpdateProgress.bind(this)}
        />
      )
    });
  }

  render() {
    return (
      <div className="calendar">
        This is a calendar
        <ProgressBar percent="10%" />
        <div className="calendar__door-wrapper">
          {this.renderDoors()}
        </div>
        <ChristmasScene percent="10%" />
      </div>
    );
  }
}

export default Calendar;