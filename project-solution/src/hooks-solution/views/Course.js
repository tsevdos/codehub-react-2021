import React, { useState, useEffect } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";
import { CourseForm, CourseItem, Loader } from "../components";
import {
  fetchCourse,
  fetchCourseInstructors,
  updateCourse,
  deleteCourse,
} from "../../api";
import { prepareCourse } from "../utils/helpers";

const Course = () => {
  const history = useHistory();
  const match = useRouteMatch();
  const [course, setCourse] = useState(null);
  const [instructors, setInstructors] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  useEffect(() => {
    async function fetchData() {
      const course = await fetchCourse(match.params.id);
      const instructors = await fetchCourseInstructors(course.instructors);

      setCourse(course);
      setInstructors(instructors);
    }

    fetchData();
  }, [match.params.id, showEditModal]);

  const handleDeleteCourse = async () => {
    await deleteCourse(course.id);
    history.push("/courses");
  };
  const handleUpdateCourse = async (courseData) => {
    const course = prepareCourse(courseData);
    await updateCourse(course);
    setShowEditModal(false);
  };
  const toggleDeleteModal = () => {
    setShowDeleteModal(!showDeleteModal);
  };
  const toggleEditModal = () => {
    setShowEditModal(!showEditModal);
  };

  return (
    <div>
      {course && (
        <Modal isOpen={showEditModal} toggle={toggleEditModal} size="lg">
          <ModalHeader toggle={toggleEditModal}>
            {`Edit Course: ${course.title}`}
          </ModalHeader>
          <ModalBody>
            <CourseForm course={course} handleCourse={handleUpdateCourse} />
          </ModalBody>
        </Modal>
      )}

      {course && (
        <Modal isOpen={showDeleteModal} toggle={toggleDeleteModal}>
          <ModalHeader toggle={toggleDeleteModal}>Delete Course</ModalHeader>
          <ModalBody>
            <h5>{`Are you sure you want to delete "${course.title}" course?`}</h5>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={toggleDeleteModal}>
              Cancel
            </Button>
            <Button color="primary" onClick={handleDeleteCourse}>
              Delete
            </Button>
          </ModalFooter>
        </Modal>
      )}

      {course && instructors ? (
        <CourseItem
          {...course}
          instructors={instructors}
          handleDelete={toggleDeleteModal}
          handleEdit={toggleEditModal}
        />
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Course;
