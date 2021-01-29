import React, { useState, useEffect } from "react";
import UserCard from "./UserCard";

const UserCardContainer = ({ title }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/user")
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
      });
  }, []);

  return <UserCard title={title} user={user} />;
};

export default UserCardContainer;
