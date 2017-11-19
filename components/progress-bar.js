import React, { Component } from 'react';
import Santa from '../public/images/santasmall.svg';

const ProgressBar = (props) => {
  return (
    <div className="progress-bar">
      <div className="progress-bar__bar" style={{width: `${props.percent}%`}}>
        <div className="progress-bar__bar__sleigh">
         <Santa width={200} />
        </div>
      </div>
    </div>
  )
}

export default ProgressBar;