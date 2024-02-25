import React, { Component } from "react";
import "./index.scss";
import Image from "next/image";

class MiddleLogo extends Component {
  state = {};
  render() {
    return (
      <div className="middle_logo">
        <Image
          src="/assest/images/bilibili.png"
          alt=""
          fill
          objectFit="contain"
        ></Image>
      </div>
    );
  }
}

export default MiddleLogo;
