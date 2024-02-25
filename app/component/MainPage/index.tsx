"use client";
import React, { Component } from "react";
import "./index.scss";
import Image from "next/image";
import Link from "next/link";
import LinkActive from "../LinkActive/LinkActive";
import LeftBlackBox from "../leftBlackBox/index";
import MidImage from "../MidImage/index";
import LeftBackGround from "../leftBackground/index";
import LeftBottomText from "../LeftBottomText/index";
import LeftMidText from "../LeftMidText/index";
import LeftTopText from "../LeftTopText/index";
import Swiper from "../Swiper/index";
import RightBackground from "../RightBackground/index";
import RightInfo from "../RightInfo/index";
class MainPage extends Component<any, any> {
  state = {
    style: "mobile unactive mainBox",
    swiperData: [
      { title: "首页", link: "#" },
      { title: "更多", link: "#" },
    ],
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        style: "mobile",
      });
    }, 1500);

    setTimeout(() => {
      this.setState({
        style: "mobile startProcess",
      });
    }, 2800);

    setTimeout(() => {
      //设置字体大小
      let html = document.querySelector("html") as HTMLHtmlElement;
      // 高度
      const newHeightFontSize = ((html.clientHeight / 930) * 45).toFixed(2);
      const newWidthFontSize = ((html.clientWidth / 1920) * 75).toFixed(2);
      const result =
        html.clientWidth > 992 ? newHeightFontSize : newWidthFontSize;
      document
        .querySelector("html")!
        .setAttribute("style", "font-size:" + result + "px")!;
    }, 500);
  }

  render() {
    return (
      <>
        <div className={this.state.style} id="mainBox">
          <LeftBlackBox></LeftBlackBox>
          <LeftBackGround BgPath="/assest/images/demo.jpeg"></LeftBackGround>
          <LeftTopText></LeftTopText>
          <LeftBottomText>
            {/* <MidImage></MidImage> */}
            CutyRoom from 2022 to {new Date().getFullYear()}
          </LeftBottomText>
          <MidImage></MidImage>
          <LeftMidText></LeftMidText>
          <RightInfo
            title={"CUTYROOM"}
            name={"Offical"}
            uid={"QQ群：114514"}
          ></RightInfo>
          <Swiper data={this.state.swiperData} />
        </div>
      </>
    );
  }
}
export default MainPage;
