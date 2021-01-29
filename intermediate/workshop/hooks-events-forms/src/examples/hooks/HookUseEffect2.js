import React, { useState, useEffect } from "react";
import { Typography } from "antd";

const { Title } = Typography;

export default function HookUseEffect2() {
  const [joke, setJoke] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch("http://api.icndb.com/jokes/random")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setJoke(data.value.joke);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <Title>useEffect()</Title>
      <hr />
      <div>
        {isLoading ? (
          <Title level={4}>Loading...</Title>
        ) : (
          <Title level={4}>{joke}</Title>
        )}
      </div>
    </div>
  );
}
