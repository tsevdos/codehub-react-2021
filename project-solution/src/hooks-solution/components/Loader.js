import React from "react";
import { Spinner } from "reactstrap";

const Loader = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: "200px",
    }}
  >
    <Spinner color="dark" />
  </div>
);

export default Loader;
