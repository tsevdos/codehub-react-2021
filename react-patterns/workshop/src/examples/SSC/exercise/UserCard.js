import React, { useState, useEffect } from "react";
import { Card, Typography } from "antd";

const { Title } = Typography;

const UserCard = ({ title }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/user")
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
      });
  }, []);

  return (
    <div>
      <Title>{title}</Title>
      {user && (
        <Card
          cover={<img alt={user.name} src={user.imgPath} />}
          style={{ width: "300px" }}
        >
          <Title level={4}>
            {user.name} ({user.username})
          </Title>
          <p>
            JWT: {user.JWT} | is admin: {user.admin ? "yes" : "no"}
          </p>
        </Card>
      )}
    </div>
  );
};

export default UserCard;
