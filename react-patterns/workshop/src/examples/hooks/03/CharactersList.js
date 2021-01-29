import React from "react";
import { Card, Typography } from "antd";
import useCharacters from "./useCharacters";

const { Title } = Typography;

const CharactersListCH3 = () => {
  const characters = useCharacters({
    url: "http://localhost:3001",
    format: "json",
    resource: "characters",
  });

  return (
    <div>
      <Title>Custom hooks 03: Pass parameters to custom hook</Title>
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
};

export default CharactersListCH3;
