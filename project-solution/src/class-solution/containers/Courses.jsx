import React, { Component } from "react";
import { Row, Spinner } from "reactstrap";
import CourseListItem from "../components/CourseListItem";
import { fetchCourses } from "../../api";

class Courses extends Component {
  state = {
    courses: null,
  };

  async componentDidMount() {
    const courses = await fetchCourses();
    this.setState({ courses });
  }

  render() {
    const { courses } = this.state;

    return (
      <>
        <h1>All Courses</h1>
        <Row>
          {courses ? (
            courses.map((course) => (
              <CourseListItem key={course.id} {...course} />
            ))
          ) : (
            <Spinner color="primary" />
          )}
        </Row>
      </>
    );
  }
}

export default Courses;
