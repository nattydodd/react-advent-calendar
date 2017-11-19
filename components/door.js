import React from 'react';
import { Component } from 'react';

class Door extends Component {

  constructor(props) {
    super(props);

    this.state = {
      open: false
    }
  }

  toggleDoor(id) {

    if (!this.props.activeDoor) {
      return;
    }

    this.setState({
      open: !this.state.open
    });

    // if the door is opening, increase the progress, if it is closing, decrease
    if (!this.state.open) {
      this.props.updateProgress(id);
    } else {
      this.props.updateProgress(parseInt(id) - 1);
    }

  }

  render() {
    return (
      <div className="door">
        <div
          className={`door__frame ${this.props.activeDoor && !this.state.open ? "door__frame--active" : ""}`}>
          <this.props.image width={100} height={120} />
          <div
            className={`door__frame__door ${this.state.open ? "door__frame__door--open" : ""}`}
            onClick={() => this.toggleDoor(this.props.id)}>
            <div className="door__frame__door__handle"></div>
            <div className="door__frame__door__hinge top"></div>
            <div className="door__frame__door__hinge bottom"></div>
            <div className="door__frame__door__number">
              <p>{this.props.id}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Door;