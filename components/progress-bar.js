import React, { Component } from 'react';

const ProgressBar = (props) => {
  return (
    <div className="progress-bar">
      <div className="progress-bar__bar" style={{width: `${props.percent}%`}}></div>
    </div>
  )
}

export default ProgressBar;