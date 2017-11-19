import React from 'react';
import { Component } from 'react';

class Door extends Component {

  constructor(props) {
    super(props);

    this.state = {
      open: false
    }
  }

  toggleDoor() {
    this.setState({
      open: !this.state.open
    })
  }

  render() {
    return (
      <div
        className="door__frame">
        <div
          className={`door__frame__door ${this.state.open ? "door__frame__door--open" : ""}`}
          onClick={() => this.toggleDoor()}>
          <div className="door__frame__door__handle"></div>
          <div className="door__frame__door__hinge top"></div>
          <div className="door__frame__door__hinge bottom"></div>
          <div className="door__frame__door__number">
            <p>{this.props.id}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Door;