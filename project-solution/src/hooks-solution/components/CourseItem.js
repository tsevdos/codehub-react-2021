import React from "react";
import { Row, Col, Button } from "reactstrap";
import Instructor from "./Instructor";

const CourseItem = ({
  id,
  title,
  imagePath,
  price,
  dates,
  duration,
  open,
  description,
  instructors,
  handleEdit,
  handleDelete,
}) => {
  const { normal } = price;
  const { start_date: startDate, end_date: endDate } = dates;
  const startDateFormatted = new Date(startDate).toLocaleDateString("el-gr");
  const endDateFormatted = new Date(endDate).toLocaleDateString("el-gr");
  const bgImage = {
    height: "250px",
    background: `url(${imagePath}) no-repeat top left`,
    backgroundSize: "100% 100%",
  };

  return (
    <>
      <Row>
        <Col xs={12}>
          <h1>
            {title} <small>({id})</small>
          </h1>
          <div style={bgImage}></div>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col xs={6}>
          <h4>Price: {normal} €</h4>
          <h4>Bookable: {open ? "✔" : "✖"}</h4>
        </Col>
        <Col xs={6}>
          <h4 className="text-right">Duration: {duration}</h4>
          <h4 className="text-right">
            Dates: {startDateFormatted} - {endDateFormatted}
          </h4>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <div
            className="lead m-top"
            dangerouslySetInnerHTML={{ __html: description }}
          />
          <div className="clearfix">
            <Button color="primary" size="large" onClick={handleEdit}>
              Edit
            </Button>
            &nbsp;
            <Button color="danger" size="large" onClick={handleDelete}>
              Delete
            </Button>
            &nbsp;
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <h2>Instructors</h2>
          {instructors.length
            ? instructors.map((instructor) => (
                <Instructor key={instructor.id} {...instructor} />
              ))
            : "None"}
        </Col>
      </Row>
    </>
  );
};

export default CourseItem;
