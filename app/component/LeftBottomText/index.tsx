"use client"
import React, { Component } from 'react';
import './index.scss'

class LeftBottomText extends Component<any,any> {
  state = {}
  render() {
    return (
      <div className='left_bottom_text '>
        <span>{this.props.children}</span>
      </div>
    );
  }
}

export default LeftBottomText;