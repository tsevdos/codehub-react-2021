import React, { useState, useEffect } from "react";
import { Form, Input, FormGroup, Label, Button } from "reactstrap";
import { fetchInstructors } from "../../api";
import { usePromise } from "../hooks";
import { getNewfield } from "../utils/helpers";

const emptyCourse = {
  title: "",
  imagePath: "",
  dates: {
    end_date: "",
    start_date: "",
  },
  description: "",
  duration: "",
  instructors: [],
  open: false,
  price: {
    early_bird: "0",
    normal: "0",
  },
};

const CourseForm = ({ course: courseData, handleCourse }) => {
  const [mode, setMode] = useState("");
  const [course, setCourse] = useState(emptyCourse);
  const { data: instructors, loading } = usePromise(fetchInstructors);
  useEffect(() => {
    if (courseData) {
      setCourse(courseData);
      setMode("edit-mode");
    } else {
      setCourse(emptyCourse);
      setMode("new-mode");
    }
  }, [courseData]);

  const onHandleCourse = (e) => {
    e.preventDefault();
    handleCourse(course);
  };
  const onFieldChange = (e) => {
    const field = getNewfield(course, e.target);
    setCourse({ ...course, ...field });
  };

  const {
    title,
    duration,
    imagePath,
    open,
    description,
    dates,
    price,
  } = course;
  const { start_date, end_date } = dates;
  const { early_bird, normal } = price;

  return (
    <Form className="clearfix" onSubmit={onHandleCourse}>
      <FormGroup>
        <Label for="title">Title:</Label>
        <Input
          type="text"
          name="title"
          placeholder="Title"
          value={title}
          onChange={onFieldChange}
        />
      </FormGroup>
      <FormGroup>
        <Label for="duration">Duration:</Label>
        <Input
          type="text"
          name="duration"
          placeholder="Duration"
          value={duration}
          onChange={onFieldChange}
        />
      </FormGroup>
      <FormGroup>
        <Label for="duration">Image path:</Label>
        <Input
          type="text"
          name="imagePath"
          placeholder="Image path"
          value={imagePath}
          onChange={onFieldChange}
        />
      </FormGroup>
      <FormGroup check>
        <Label check>
          <Input
            type="checkbox"
            name="open"
            checked={open}
            onChange={onFieldChange}
          />
          Bookable
        </Label>
      </FormGroup>
      <hr />
      <h3>Instructors</h3>
      {!loading &&
        instructors.map(({ id, name }) => (
          <FormGroup check key={id}>
            <Label check>
              <Input
                type="checkbox"
                name="instructors"
                value={id}
                checked={course.instructors.includes(id)}
                onChange={onFieldChange}
              />{" "}
              {`${name.first} ${name.last}`}
            </Label>
          </FormGroup>
        ))}
      <hr />
      <FormGroup>
        <Label for="description">Description:</Label>
        <Input
          type="textarea"
          name="description"
          value={description}
          onChange={onFieldChange}
        />
      </FormGroup>
      <hr />
      <h3>Dates</h3>
      <FormGroup>
        <Label for="start-date">Start date:</Label>
        <Input
          type="text"
          name="start-date"
          placeholder="Start date"
          value={start_date}
          onChange={onFieldChange}
        />
      </FormGroup>
      <FormGroup>
        <Label for="end-date">End date:</Label>
        <Input
          type="text"
          name="end-date"
          placeholder="End date"
          value={end_date}
          onChange={onFieldChange}
        />
      </FormGroup>
      <hr />
      <h3>Price</h3>
      <FormGroup>
        <Label for="early-bird">Early Bird:</Label>
        <Input
          type="text"
          name="early-bird"
          placeholder="Early Bird"
          value={early_bird}
          onChange={onFieldChange}
        />
      </FormGroup>
      <FormGroup>
        <Label for="normal">Normal price:</Label>
        <Input
          type="text"
          name="normal"
          placeholder="Normal price"
          value={normal}
          onChange={onFieldChange}
        />
      </FormGroup>
      <hr />
      <Button className="float-right" type="submit" color="primary">
        {mode === "new-mode" ? "Add Course" : "Edit Course"}
      </Button>
    </Form>
  );
};

export default CourseForm;
