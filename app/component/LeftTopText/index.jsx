import { Row, Col } from "antd";
import React, { Component } from "react";
import "./index.scss";

class LeftTopInfo extends Component {
  render() {
    return (
      <Row className="left_top_text">
        <Col xs={12} sm={12} md={12} lg={24} xl={24} xxl={24} className="name">
          <span>CUTY</span> <span>ROOM</span>
        </Col>
        <Col xs={0} sm={0} md={0} lg={24} xl={24} xxl={24} className="info">
          <span>Explore</span> <span>the</span> <span>World</span>
        </Col>
        <Col xs={12} sm={12} md={12} lg={24} xl={24} xxl={24} className="os">
          <span></span> <strong></strong>
        </Col>
      </Row>
    );
  }
}

export default LeftTopInfo;
