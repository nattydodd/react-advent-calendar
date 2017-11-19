import React, { Component } from 'react';

const ProgressBar = (props) => {
  return (
    <div className="progress-bar" style={{width: `${props.percent}%`}}></div>
  )
}

export default ProgressBar;