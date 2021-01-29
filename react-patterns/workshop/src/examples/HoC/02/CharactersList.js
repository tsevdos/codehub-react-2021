import React from "react";
import withData from "./withData";
import { Card, Typography } from "antd";

const { Title } = Typography;

const CharactersListHoC2 = ({ data }) => (
  <div>
    <Title>HoC 02: withData HoC</Title>
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

export default withData(CharactersListHoC2);
