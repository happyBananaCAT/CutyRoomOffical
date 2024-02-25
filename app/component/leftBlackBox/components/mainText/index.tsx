import React, { Component } from "react";
import "./index.scss";

class MainText extends Component<any, any> {
  render() {
    return <div className="main_text">{this.props.children}</div>;
  }
}

export default MainText;
