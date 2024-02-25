"use client";
import React, { Component } from "react";
import "./index.scss";

import HeadIntro from "./components/headText";
import MainText from "./components/mainText";

import Tip from "./components/mainText/components/tip";

class LeftBlackBox extends Component {
  state = {
    style: "core_box",
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        style: "normal core_box",
      });
    }, 1500);
  }
  // state = {}
  render() {
    return (
      // 加载中样式 left_black_box_unactive
      <div className="left_black_box">
        <div className={this.state.style}>
          <HeadIntro>section</HeadIntro>
          <MainText>
            <span>CUTY</span>
            <span>ROOM</span>
            <Tip>随便写个标语</Tip>
          </MainText>
        </div>
      </div>
    );
  }
}

export default LeftBlackBox;
