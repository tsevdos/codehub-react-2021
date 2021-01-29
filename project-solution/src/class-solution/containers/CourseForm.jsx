import React, { Component } from "react";
import PropTypes from "prop-types";
import { Form, Input, FormGroup, Label, Button } from "reactstrap";
import { fetchInstructors } from "../../api";

class CourseForm extends Component {
  state = {
    course: {
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
    },
    instructors: [],
  };

  constructor(props) {
    super(props);

    if (props.course) {
      this.state.course = { ...props.course };
    }
  }

  onHandleCourse = (e) => {
    e.preventDefault();
    this.props.handleCourse(this.state.course);
  };

  async componentDidMount() {
    const instructors = await fetchInstructors();
    this.setState({ instructors });
  }

  onFieldChange = (e) => {
    let { name, value = "", checked } = e.target;
    let newValue = value;

    this.setState((prevState) => {
      switch (name) {
        case "open":
          newValue = !prevState.course.open;
          break;
        case "start-date":
          name = "dates";
          newValue = this.getNewDates("start-date", value, { ...prevState.course.dates });
          break;
        case "end-date":
          name = "dates";
          newValue = this.getNewDates("end-date", value, { ...prevState.course.dates });
          break;
        case "early-bird":
          name = "price";
          newValue = this.getNewPrice("early-bird", value, { ...prevState.course.price });
          break;
        case "normal":
          name = "price";
          newValue = this.getNewPrice("normal", value, { ...prevState.course.price });
          break;
        case "instructors":
          if (checked) {
            newValue = [...this.state.course.instructors, value];
          } else {
            const newInstructors = [...this.state.course.instructors];
            newValue = newInstructors.filter((instructorID) => instructorID !== value);
          }
          break;
      }

      return {
        course: { ...prevState.course, [name]: newValue },
      };
    });
  };

  getNewDates(dateType, value, currentDates) {
    return {
      start_date: dateType === "start-date" ? value : currentDates.start_date,
      end_date: dateType === "end-date" ? value : currentDates.end_date,
    };
  }

  getNewPrice(priceType, value, currentPrice) {
    return {
      early_bird: priceType === "early-bird" ? value : currentPrice.early_bird,
      normal: priceType === "normal" ? value : currentPrice.normal,
    };
  }

  render() {
    const { mode } = this.props;
    const { course, instructors } = this.state;
    const { title, duration, imagePath, open, description, dates, price } = course;
    const { start_date, end_date } = dates;
    const { early_bird, normal } = price;

    return (
      <Form className="clearfix" onSubmit={this.onHandleCourse}>
        <FormGroup>
          <Label for="title">Title:</Label>
          <Input
            type="text"
            name="title"
            placeholder="Title"
            value={title}
            onChange={this.onFieldChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="duration">Duration:</Label>
          <Input
            type="text"
            name="duration"
            placeholder="Duration"
            value={duration}
            onChange={this.onFieldChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="duration">Image path:</Label>
          <Input
            type="text"
            name="imagePath"
            placeholder="Image path"
            value={imagePath}
            onChange={this.onFieldChange}
          />
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="checkbox" name="open" checked={open} onChange={this.onFieldChange} />{" "}
            Bookable
          </Label>
        </FormGroup>
        <hr />
        <h3>Instructors</h3>
        {instructors.length &&
          instructors.map(({ id, name }) => (
            <FormGroup check key={id}>
              <Label check>
                <Input
                  type="checkbox"
                  name="instructors"
                  value={id}
                  checked={course.instructors.includes(id)}
                  onChange={this.onFieldChange}
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
            onChange={this.onFieldChange}
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
            onChange={this.onFieldChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="end-date">End date:</Label>
          <Input
            type="text"
            name="end-date"
            placeholder="End date"
            value={end_date}
            onChange={this.onFieldChange}
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
            onChange={this.onFieldChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="normal">Normal price:</Label>
          <Input
            type="text"
            name="normal"
            placeholder="Normal price"
            value={normal}
            onChange={this.onFieldChange}
          />
        </FormGroup>
        <hr />
        <Button className="float-right" type="submit" color="primary">
          {mode === "add" ? "Add Course" : "Edit Course"}
        </Button>
      </Form>
    );
  }
}

CourseForm.propTypes = {
  course: PropTypes.object,
  mode: PropTypes.oneOf(["add", "edit"]),
  handleCourse: PropTypes.func.isRequired,
};

export default CourseForm;
