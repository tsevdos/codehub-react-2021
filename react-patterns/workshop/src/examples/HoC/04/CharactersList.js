import React from "react";
import withData from "./withData";
import withLoader from "./withLoader";
import { Card, Typography } from "antd";

const { Title } = Typography;

const CharactersListHoC4 = ({ data }) => (
  <div>
    <Title>HoC 04: HοC composition (withData and withLoader)</Title>
    <hr />
    <div className="characters-container">
      {data.map(({ id, name, culture, isFemale }) => (
        <Card type="inner" key={id} title={name}>
          <p>
            {culture} / {isFemale ? "female" : "male"}
          </p>
        </Card>
      ))}
    </div>
  </div>
);

const options = {
  url: "http://localhost:3001",
  format: "json",
  resource: "characters",
};

// Order matters
export default withData(options)(withLoader(CharactersListHoC4));
