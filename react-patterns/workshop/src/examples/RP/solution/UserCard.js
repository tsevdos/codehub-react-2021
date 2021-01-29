import React from "react";
import User from "./User";
import { Card, Typography } from "antd";

const { Title } = Typography;

const UserCard = ({ title }) => (
  <div>
    <Title>{title}</Title>
    <User>
      {(user) => {
        user && (
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
        );
      }}
    </User>
  </div>
);

export default UserCard;
