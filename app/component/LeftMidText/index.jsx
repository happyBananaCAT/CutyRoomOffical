import React, { Component } from "react";
import Image from "next/image";
import "./index.scss";

class LeftMiddleText extends Component {
  render() {
    return (
      <div className="left_middle_text">
        <div className="contact_box">
          <div className="title_box">
            <span>From XTU</span>
          </div>
          <div className="contact_link">
            {/* //todo 添加网址 */}
            <a className="iconfont" href="#">
              <Image
                src="/assest/images/bilibili.png"
                alt=""
                fill
                objectFit="contain"
              ></Image>
            </a>
            <a className="iconfont">
              <Image
                src="/assest/images/bilibili.png"
                alt=""
                fill
                objectFit="contain"
              ></Image>
            </a>
            <a className="iconfont">
              <Image
                src="/assest/images/bilibili.png"
                alt=""
                fill
                objectFit="contain"
              ></Image>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default LeftMiddleText;
