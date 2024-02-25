import React, { Component } from "react";
import "./index.scss";

class RightBackground extends Component {
  renderX = () => {
    let res = [];
    for (let i = 0; i < 8; i++) {
      res.push(
        <div className="X_decoration" key={i}>
          <div className="dot">
            <div className="top"></div>
            <div className="left"></div>
            <div className="bottom"></div>
            <div className="right"></div>
          </div>
        </div>
      );
    }

    return res;
  };
  render() {
    return <div className="right_background">{this.renderX()}</div>;
  }
}

export default RightBackground;
