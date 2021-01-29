import React from "react";
import { Card, CardBody, CardText, Badge } from "reactstrap";

const InfoTile = ({ amount, title }) => (
  <div>
    <Card>
      <CardBody>
        <CardText>
          {title.toUpperCase()}: <Badge>{amount}</Badge>
        </CardText>
      </CardBody>
    </Card>
  </div>
);

export default InfoTile;
