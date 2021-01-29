import React, { useState, useEffect } from "react";
import { Jumbotron, Row, Col } from "reactstrap";
import { CoursesTable, InfoTile, Loader } from "../components";
import { fetchStats, fetchCourses } from "../../api";

const Dashboard = () => {
  const [stats, setStats] = useState(null);
  const [courses, setCourses] = useState(null);
  useEffect(() => {
    async function fetchData() {
      const [stats, courses] = await Promise.all([
        fetchStats(),
        fetchCourses(),
      ]);

      setStats(stats);
      setCourses(courses);
    }

    fetchData();
  }, []);
  const lastFiveCourses = courses ? courses.slice(0, 5) : [];

  return (
    <>
      <Row>
        <Col xs={12}>
          <Jumbotron>
            <h1>Welcome to Code.Hub Dashboard!</h1>
            <p className="lead">Manage everything and have fun!</p>
          </Jumbotron>
        </Col>
      </Row>

      <Row>
        {stats ? (
          stats.map(({ id, ...rest }) => (
            <Col key={id} xs={12} sm={6} md={3}>
              <InfoTile {...rest} />
            </Col>
          ))
        ) : (
          <Col xs={12}>
            <Loader />
          </Col>
        )}
      </Row>

      <Row>
        <Col xs={12}>
          {courses ? (
            <CoursesTable title="Last 5 Courses" data={lastFiveCourses} />
          ) : (
            <Loader />
          )}
        </Col>
      </Row>
    </>
  );
};

export default Dashboard;
