import React from "react";
import CharactersList from "./CharactersList";
import { Card, Typography } from "antd";

const { Title } = Typography;

const App = () => (
  <div>
    <Title>Render props 02: Render prop</Title>
    <hr />
    <div className="characters-container">
      <CharactersList
        render={(characters) =>
          characters.length &&
          characters.map(({ id, name, culture, isFemale }) => (
            <Card type="inner" key={id} title={name}>
              <p>
                {culture} / {isFemale ? "female" : "male"}
              </p>
            </Card>
          ))
        }
      />
    </div>
  </div>
);

export default App;
