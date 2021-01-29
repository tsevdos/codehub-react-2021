import React from "react";
import PropTypes from "prop-types";

const Instructor = ({ name, email, dob, linkedin, bio }) => (
  <div>
    <h3>
      {`${name.first} ${name.last}`} <small>({dob})</small>
    </h3>
    <p>
      Email: <a href={`mailto:${email}`}>{email}</a> | <a href={linkedin}>LinkedIn</a>
    </p>
    <p>{bio}</p>
  </div>
);

Instructor.propTypes = {
  name: PropTypes.shape({
    first: PropTypes.string.isRequired,
    last: PropTypes.string.isRequired,
  }).isRequired,
  email: PropTypes.string.isRequired,
  dob: PropTypes.string.isRequired,
  linkedin: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
};

export default Instructor;
