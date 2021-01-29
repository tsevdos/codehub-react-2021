import React from "react";
import { Link } from "react-router-dom";
import { Col, Card, CardHeader, CardBody, CardImg, Button } from "reactstrap";

const CourseListItem = ({
  id,
  title,
  imagePath,
  price,
  dates,
  duration,
  open,
}) => {
  const { normal } = price;
  const { start_date: startDate, end_date: endDate } = dates;
  const startDateFormatted = new Date(startDate).toLocaleDateString("el-gr");
  const endDateFormatted = new Date(endDate).toLocaleDateString("el-gr");

  return (
    <Col xs={12} sm={6} md={4}>
      <Card className="list-item">
        <CardHeader>
          <h4>{title}</h4>
        </CardHeader>
        <Link to={`/courses/${id}`}>
          <CardImg
            top
            height="300px"
            src={imagePath}
            alt={`${title} course image`}
          />
        </Link>
        <CardBody>
          <div className="">
            <p>
              Price: <strong>{normal}€</strong> | Bookable:{" "}
              <strong>{open ? "✔" : "✖"}</strong>
            </p>
            <p>
              Duration: <strong>{duration}</strong>
            </p>
            <p>
              Dates:{" "}
              <strong>
                {startDateFormatted} - {endDateFormatted}
              </strong>
            </p>
            <Button
              tag={Link}
              to={`/courses/${id}`}
              color="primary"
              className="float-right"
            >
              View
            </Button>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default CourseListItem;
