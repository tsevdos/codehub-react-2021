import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Card, CardHeader, CardBody, CardFooter, Table, Button } from "reactstrap";
import CourseTableItem from "./CourseTableItem";

const CoursesTable = ({ title, data }) => (
  <Card className="m-top">
    <CardHeader>{title}</CardHeader>
    <CardBody className="no-padding">
      <Table hover>
        <thead>
          <tr>
            <th></th>
            <th>Title</th>
            <th>Bookable</th>
            <th>Price</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((program) => (
            <CourseTableItem key={program.id} {...program} />
          ))}
        </tbody>
      </Table>
      <CardFooter className="clearfix">
        <Button tag={Link} to="/courses" color="primary" className="float-right">
          View All
        </Button>
      </CardFooter>
    </CardBody>
  </Card>
);

CoursesTable.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      open: PropTypes.bool.isRequired,
      price: PropTypes.shape({
        normal: PropTypes.number.isRequired,
        early_bird: PropTypes.number,
      }).isRequired,
      dates: PropTypes.shape({
        start_date: PropTypes.string.isRequired,
        end_date: PropTypes.string.isRequired,
      }).isRequired,
    })
  ),
};

export default CoursesTable;
