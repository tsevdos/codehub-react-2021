import React from "react";
import { Card, Typography, Spin } from "antd";
import useCharacters from "./useCharacters";

const { Title } = Typography;

const CharactersListCH4 = () => {
  const [characters, isLoading] = useCharacters({
    url: "http://localhost:3001",
    format: "json",
    resource: "characters",
  });

  return (
    <div>
      <Title>Custom hooks 04: Return more complex data</Title>
      <hr />
      <div className="characters-container">
        {isLoading ? (
          <Spin size="large" />
        ) : (
          characters.map(({ id, name, culture, isFemale }) => (
            <Card type="inner" key={id} title={name}>
              <p>
                {culture} / {isFemale ? "female" : "male"}
              </p>
            </Card>
          ))
        )}
      </div>
    </div>
  );
};

export default CharactersListCH4;
