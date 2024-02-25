"use client";
import React, { Component } from "react";
import "./index.scss";
//左侧背景
class LeftBackground extends Component<any, any> {
  LeftBackground = () => {
    if (this.props.BgPath) {
      return (
        <div
          className="LeftBg"
          key={0}
          style={{ backgroundImage: `url(${this.props.BgPath})` }}
        ></div>
      );
    } else {
      return (
        <div
          className="LeftBg"
          key={0}
          style={{ backgroundImage: "url(/assest/images/error.jpg)" }}
        ></div>
      );
    }
  };
  render() {
    return <>{this.LeftBackground()}</>;
  }
}
export default LeftBackground;
