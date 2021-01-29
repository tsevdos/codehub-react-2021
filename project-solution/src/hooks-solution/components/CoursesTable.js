import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Table,
  Button,
} from "reactstrap";
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
        <Button
          tag={Link}
          to="/courses"
          color="primary"
          className="float-right"
        >
          View All
        </Button>
      </CardFooter>
    </CardBody>
  </Card>
);

export default CoursesTable;
