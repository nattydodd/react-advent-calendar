import React from 'react';
import { Component } from 'react';
import Door from './door.js';
import ProgressBar from './progress-bar.js';
import Snowman from '../public/images/snowman-02.svg';

const doors = (() => {
  let doorArray = [
    {
      id: 1,
      image : Snowman
    },
    {
      id: 2,
      image: Snowman
    },
    {
      id: 3,
      image: Snowman
    },
  ];
  // create the array of days 1-25

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
          id={door.id}
          image={door.image}
          key={`door${door.id}`}
          updateProgress={this.handleUpdateProgress.bind(this)}
          /* we want to be able to open the door if it is active, and close it if the next door is active */
          activeDoor={this.state.activeDoor === door.id || this.state.activeDoor === door.id + 1}
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
      </div>
    );
  }
}

export default Calendar;