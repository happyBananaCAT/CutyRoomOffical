import React, { Component } from 'react';

import './index.scss'

class Tip extends Component<any,any> {
  render() {
    return (
      <div className='small_tip'>
        {this.props.children}
      </div>
    );
  }
}

export default Tip;