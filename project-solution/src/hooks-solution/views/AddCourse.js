import React from "react";
import { useHistory } from "react-router-dom";
import { Jumbotron } from "reactstrap";
import { CourseForm } from "../components";
import { addCourse } from "../../api";
import { prepareCourse } from "../utils/helpers";

const AddCourse = () => {
  const history = useHistory();
  const handleAddCourse = async (courseData) => {
    const course = prepareCourse(courseData);
    await addCourse(course);
    history.push("/courses");
  };

  return (
    <Jumbotron>
      <h2>Add Course</h2>
      <CourseForm handleCourse={handleAddCourse} />
    </Jumbotron>
  );
};

export default AddCourse;
