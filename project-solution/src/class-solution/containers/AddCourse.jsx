import React, { Component } from "react";
import PropTypes from "prop-types";
import { Jumbotron } from "reactstrap";
import CourseForm from "./CourseForm";
import { addCourse } from "../../api";

class AddCourse extends Component {
  handleAddCourse = async (course) => {
    const { history } = this.props;
    const id = Math.floor(Math.random() * 1000).toString(10);
    const {
      price: { early_bird, normal },
    } = course;
    const newPrice = {
      early_bird: parseInt(early_bird, 10),
      normal: parseInt(normal, 10),
    };
    const data = { ...course, id, price: newPrice };

    await addCourse(data);
    history.push("/courses");
  };

  render() {
    return (
      <Jumbotron>
        <h2>Add Course</h2>
        <CourseForm mode="add" handleCourse={this.handleAddCourse} />
      </Jumbotron>
    );
  }
}

AddCourse.propTypes = {
  history: PropTypes.object.isRequired,
};

export default AddCourse;
