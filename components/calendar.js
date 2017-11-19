import React from 'react';
import { Component } from 'react';
import Door from './door.js';
import ProgressBar from './progress-bar.js';
import ChristmasScene from './christmas-scene.js';

const doors = (() => {
  let doorArray = [];
  // create the array of days 1-25
  for (let i = 1; i < 26; i++) {
    doorArray.push(i);
  }

  // then shuffle the array
  let m = doorArray.length; //25
  let t;
  let i;

  while (m) {
    m--
    i = Math.floor(Math.random() * m);

    t = doorArray[m];
    doorArray[m] = doorArray[i];
    doorArray[i] = t;
  }

  return doorArray;

})();


class Calendar extends Component {

  constructor() {
    super();

    this.state = {
      progress: 0,
      activeDoor: 1
    }
  }

  handleUpdateProgress(newProgress) {
    let percentage = newProgress / 25 * 100;
    this.setState({
      progress: percentage,
      activeDoor: newProgress + 1
    });
  }

  renderDoors() {
    return doors.map((door) => {
      return (
        <Door
          id={door}
          key={`door${door}`}
          updateProgress={this.handleUpdateProgress.bind(this)}
          /* we want to be able to open the door if it is active, and close it if the next door is active */
          activeDoor={this.state.activeDoor === door || this.state.activeDoor === door + 1}
        />
      )
    });
  }

  render() {
    return (
      <div className="calendar">
        <h1 className="calendar__title">My Advent Calendar</h1>
        <ProgressBar percent={this.state.progress} />
        <div className="calendar__door-wrapper">
          {this.renderDoors()}
        </div>
        <ChristmasScene percent={this.state.progress} />
      </div>
    );
  }
}

export default Calendar;