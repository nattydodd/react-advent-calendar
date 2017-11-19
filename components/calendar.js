import React from 'react';
import { Component } from 'react';
import Door from './door.js';
import ProgressBar from './progress-bar.js';
import doors from '../public/images/list.js';
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
        <div className="calendar__door-wrapper">
          {this.renderDoors()}
        </div>
        <ProgressBar percent={this.state.progress} />
      </div>
    );
  }
}

export default Calendar;