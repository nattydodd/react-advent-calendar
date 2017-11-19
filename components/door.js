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
          className={`door__door ${this.state.open ? "door__door--open" : ""}`}
          onClick={() => this.toggleDoor()}>
        </div>
      </div>
    );
  }
}

export default Door;