import React from "react";
import { Card, Typography } from "antd";

const { Title } = Typography;

const CharactersList = ({ characters }) => (
  <div>
    <Title>PCC 02: Container and presentational components</Title>
    <hr />
    <div className="characters-container">
      {characters.length &&
        characters.map(({ id, name, culture, isFemale }) => (
          <Card type="inner" key={id} title={name}>
            <p>
              {culture} / {isFemale ? "female" : "male"}
            </p>
          </Card>
        ))}
    </div>
  </div>
);

export default CharactersList;
