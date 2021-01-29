import React, { useState, useEffect } from "react";
import { Typography, Button } from "antd";

const { Title } = Typography;

const HookUseEffect = () => {
  const [counter, setCounter] = useState(0);
  const addOne = () => {
    setCounter((counter) => counter + 1);
  };
  useEffect(() => {
    console.log("useEffect demo");

    // return () => console.log("Unmount");
  }); // dependency array

  return (
    <div>
      <Title>useEffect()</Title>
      <Button type="primary" onClick={addOne}>
        Counter {counter}
      </Button>
    </div>
  );
};

export default HookUseEffect;
