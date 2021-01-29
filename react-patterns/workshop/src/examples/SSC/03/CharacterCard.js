import React from "react";
import { Card } from "antd";

const CharacterCard = ({ name, culture, isFemale }) => (
  <Card type="inner" title={name}>
    <p>
      {culture} / {isFemale ? "female" : "male"}
    </p>
  </Card>
);

export default CharacterCard;
