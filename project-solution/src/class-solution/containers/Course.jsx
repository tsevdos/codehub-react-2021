import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Spinner,
} from "reactstrap";
import CourseForm from "../containers/CourseForm";
import Loader from "../components/Loader/Loader";
import CourseItem from "../components/CourseItem";
import {
  fetchCourse,
  fetchCourseInstructors,
  updateCourse,
  deleteCourse,
} from "../../api";

class Course extends Component {
  state = {
    course: null,
    courseInstructors: null,
    showDeleteModal: false,
    showEditModal: false,
  };

  async componentDidMount() {
    const { match } = this.props;
    const course = await fetchCourse(match.params.id);
    const courseInstructors = await fetchCourseInstructors(course.instructors);

    this.setState({ course, courseInstructors });
  }

  handleDeleteCourse = async () => {
    const { course } = this.state;
    const { history } = this.props;

    await deleteCourse(course.id);
    history.push("/courses");
  };

  handleUpdateCourse = async (course) => {
    const { history } = this.props;
    const {
      price: { early_bird, normal },
    } = course;
    const newPrice = {
      early_bird: parseInt(early_bird, 10),
      normal: parseInt(normal, 10),
    };
    const data = { ...course, price: newPrice };

    await updateCourse(data);
    history.push("/courses");
  };

  toggleDeleteModal = () => {
    this.setState((prevState) => ({
      showDeleteModal: !prevState.showDeleteModal,
    }));
  };

  toggleEditModal = () => {
    this.setState((prevState) => ({ showEditModal: !prevState.showEditModal }));
  };

  render() {
    const {
      course,
      courseInstructors,
      showEditModal,
      showDeleteModal,
    } = this.state;

    return (
      <div>
        {course && (
          <Modal isOpen={showEditModal} toggle={this.toggleEditModal} size="lg">
            <ModalHeader toggle={this.toggleEditModal}>
              {`Edit Course: ${course.title}`}
            </ModalHeader>
            <ModalBody>
              <CourseForm
                course={course}
                handleCourse={this.handleUpdateCourse}
              />
            </ModalBody>
          </Modal>
        )}

        {course && (
          <Modal isOpen={showDeleteModal} toggle={this.toggleDeleteModal}>
            <ModalHeader toggle={this.toggleDeleteModal}>
              Delete Course
            </ModalHeader>
            <ModalBody>
              <h5>{`Are you sure you want to delete "${course.title}" course?`}</h5>
            </ModalBody>
            <ModalFooter>
              <Button color="secondary" onClick={this.toggleDeleteModal}>
                Cancel
              </Button>
              <Button color="primary" onClick={this.handleDeleteCourse}>
                Delete
              </Button>
            </ModalFooter>
          </Modal>
        )}

        {course ? (
          <CourseItem
            {...course}
            instructors={courseInstructors}
            handleDelete={this.toggleDeleteModal}
            handleEdit={this.toggleEditModal}
          />
        ) : (
          <Spinner color="primary" />
        )}
      </div>
    );
  }
}

Course.propTypes = {
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
};

export default Course;
