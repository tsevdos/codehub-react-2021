import React, { useReducer, useEffect } from "react";
import { Typography } from "antd";

const { Title } = Typography;

const initialState = {
  joke: "",
  isLoading: true,
};

const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "GET_JOKE":
      return { ...state, isLoading: false, joke: payload.value.joke };
    default:
      return state;
  }
};

export default function HookUseReducer() {
  const [{ joke, isLoading }, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    fetch("http://api.icndb.com/jokes/random")
      .then((res) => res.json())
      .then((joke) => {
        dispatch({ type: "GET_JOKE", payload: joke });
      });
  }, []);

  return (
    <div>
      <Title>useReducer()</Title>
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
