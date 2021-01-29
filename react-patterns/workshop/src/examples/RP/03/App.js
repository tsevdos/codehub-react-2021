import React from "react";
import CharactersList from "./CharactersList";
import { Card, Typography } from "antd";

const { Title } = Typography;

const App = () => (
  <div>
    <Title>Render props 03: Render prop with other props</Title>
    <hr />
    <div className="characters-container">
      <CharactersList
        url="http://localhost:3001"
        format="json"
        resource="characters"
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
