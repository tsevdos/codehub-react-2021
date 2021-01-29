import React from "react";
import { Card, Typography } from "antd";
import useCharacters from "./useCharacters";

const { Title } = Typography;

const CharactersListCH2 = () => {
  const characters = useCharacters();

  return (
    <div>
      <Title>Custom hooks 02: Simple custom hook</Title>
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

export default CharactersListCH2;
