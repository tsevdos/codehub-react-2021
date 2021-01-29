import React from "react";
import { Typography, Card } from "antd";
import { wordCount } from "./wordCount";

const { Title } = Typography;

const WordCountApp = () => {
  const text = "The below paragraph contains six words!";

  return (
    <Card title="WordCountApp" style={{ width: 300 }}>
      <Title>wordCount: {wordCount(text)}</Title>
      <p>{text}</p>
    </Card>
  );
};

export default WordCountApp;
