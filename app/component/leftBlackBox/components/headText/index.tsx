import React, { Component } from 'react';

import './index.scss'

class headText extends Component<any,any>{
  state = {}
  render() {
    return (
      <div className='head_intro'>{this.props.children}</div>
    );
  }
}

export default headText;