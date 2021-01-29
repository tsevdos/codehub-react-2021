import React, { useState, useEffect } from "react";
import { Card, Typography } from "antd";

const { Title } = Typography;

const CharactersListRP = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/characters")
      .then((res) => res.json())
      .then((data) => {
        setCharacters(data);
      });
  }, []);

  return (
    <div>
      <Title>Render props 01: Starting Point</Title>
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

export default CharactersListRP;
