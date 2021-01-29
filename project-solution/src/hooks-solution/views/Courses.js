import React from "react";
import { Row } from "reactstrap";
import { CourseListItem, Loader } from "../components";
import { fetchCourses } from "../../api";
import { usePromise } from "../hooks";

const Courses = () => {
  const { data: courses } = usePromise(fetchCourses);

  return (
    <>
      <h1>All Courses</h1>
      <Row>
        {courses ? (
          courses.map((course) => (
            <CourseListItem key={course.id} {...course} />
          ))
        ) : (
          <Loader />
        )}
      </Row>
    </>
  );
};

export default Courses;
