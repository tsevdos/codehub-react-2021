import React from "react";

const Instructor = ({ name, email, dob, linkedin, bio }) => (
  <div>
    <h3>
      {`${name.first} ${name.last}`} <small>({dob})</small>
    </h3>
    <p>
      Email: <a href={`mailto:${email}`}>{email}</a> |{" "}
      <a href={linkedin}>LinkedIn</a>
    </p>
    <p>{bio}</p>
  </div>
);

export default Instructor;
