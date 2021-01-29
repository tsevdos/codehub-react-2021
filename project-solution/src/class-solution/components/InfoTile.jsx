import React from "react";
import PropTypes from "prop-types";
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

InfoTile.propTypes = {
  amount: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

export default InfoTile;
