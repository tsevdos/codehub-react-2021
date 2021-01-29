import React from "react";
import CharactersList from "./CharactersList";
import { Card, Typography, Spin } from "antd";

const { Title } = Typography;

const App = () => (
  <div>
    <Title>Render props 05: Children render prop</Title>
    <hr />
    <div className="characters-container">
      <CharactersList
        url="http://localhost:3001"
        format="json"
        resource="characters"
      >
        {(characters, isLoading) =>
          isLoading ? (
            <Spin size="large" />
          ) : (
            characters.map(({ id, name, culture, isFemale }) => (
              <Card type="inner" key={id} title={name}>
                <p>
                  {culture} / {isFemale ? "female" : "male"}
                </p>
              </Card>
            ))
          )
        }
      </CharactersList>
    </div>
  </div>
);

export default App;
