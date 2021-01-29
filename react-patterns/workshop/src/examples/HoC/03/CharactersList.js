import React from "react";
import withData from "./withData";
import { Card, Typography } from "antd";

const { Title } = Typography;

const CharactersListHoC3 = ({ data }) => (
  <div>
    <Title>HoC 03: Configurable withData HoC</Title>
    <hr />
    <div className="characters-container">
      {data.length &&
        data.map(({ id, name, culture, isFemale }) => (
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

export default withData(options)(CharactersListHoC3);
