import React from "react";
import { Typography } from "antd";
import CharacterCard from "./CharacterCard";

const { Title } = Typography;

const CharactersList = ({ characters, title }) => (
  <div>
    <Title>{title}</Title>
    <hr />
    <div className="characters-container">
      {characters.length &&
        characters.map((character) => (
          <CharacterCard key={character.id} {...character} />
        ))}
    </div>
  </div>
);

export default CharactersList;
