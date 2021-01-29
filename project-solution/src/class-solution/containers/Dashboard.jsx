import React, { Component } from "react";
import { Jumbotron, Row, Col } from "reactstrap";
import InfoTile from "../components/InfoTile";
import CoursesTable from "../components/CoursesTable";
import { fetchStats, fetchCourses } from "../../api";

class Dashboard extends Component {
  state = {
    stats: null,
    courses: null,
  };

  async componentDidMount() {
    const [stats, courses] = await Promise.all([fetchStats(), fetchCourses()]);
    this.setState({ stats, courses });
  }

  render() {
    const { stats, courses } = this.state;
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
          {stats &&
            stats.map(({ id, ...rest }) => (
              <Col key={id} xs={12} sm={6} md={3}>
                <InfoTile {...rest} />
              </Col>
            ))}
        </Row>

        <Row>
          <Col xs={12}>
            {courses && <CoursesTable title="Last 5 Courses" data={lastFiveCourses} />}
          </Col>
        </Row>
      </>
    );
  }
}

export default Dashboard;
