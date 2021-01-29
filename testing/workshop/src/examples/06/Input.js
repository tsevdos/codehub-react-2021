import React, { useState } from "react";

const Input = ({ value, placeholder, staticContext, ...rest }) => {
  const [val, setVal] = useState(value);
  const updateInput = (e) => {
    setVal(e.target.value);
  };

  return (
    <input
      data-testid="input"
      placeholder={placeholder}
      value={val}
      onChange={updateInput}
      {...rest}
    />
  );
};

export default Input;
