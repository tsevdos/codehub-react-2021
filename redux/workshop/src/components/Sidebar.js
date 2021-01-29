import React from "react";
import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import { DeploymentUnitOutlined } from "@ant-design/icons";

const { Sider } = Layout;
const { SubMenu, Item } = Menu;

const Sidebar = () => (
  <Sider width={200}>
    <Menu mode="inline" style={{ height: "100%" }}>
      <SubMenu icon={<DeploymentUnitOutlined />} title="Redux">
        <Item>
          <a href="/01/">01</a>
        </Item>
        <Item>
          <a href="/02/">02</a>
        </Item>
        <Item>
          <a href="/03/">03</a>
        </Item>
        <Item>
          04 <Link to="/redux/4" />
        </Item>
        <Item>
          exercise 01 <Link to="/exercise/1" />
        </Item>
        <Item>
          05 <Link to="/redux/5" />
        </Item>
      </SubMenu>
    </Menu>
  </Sider>
);

export default Sidebar;
