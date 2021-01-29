import React, { useState, useEffect } from "react";
import { Typography, Statistic, Row, Col } from "antd";
const { Title } = Typography;

const HookUseEffect4 = () => {
  const [x, setX] = useState(null);
  const [y, setY] = useState(null);

  useEffect(() => {
    const logMousePosition = (e) => {
      // console.log(e);
      const { clientX, clientY } = e;
      console.log({ x: e.clientX, y: e.clientY });
      setX(clientX);
      setY(clientY);
    };

    window.addEventListener("mousemove", logMousePosition);

    return () => {
      console.log("component HookUseEffect4 unmounted!");
      window.removeEventListener("mousemove", logMousePosition);
    };
  }, []);

  return (
    <div>
      <Title>example 03</Title>
      <Row gutter={16}>
        <Col span={12}>
          <Statistic title="Mouse X" value={x} />
        </Col>
        <Col span={12}>
          <Statistic title="Mouse Y" value={y} />
        </Col>
      </Row>
    </div>
  );
};

export default HookUseEffect4;
