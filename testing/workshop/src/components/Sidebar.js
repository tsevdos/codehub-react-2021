import React from "react";
import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import { DeploymentUnitOutlined } from "@ant-design/icons";

const { Sider } = Layout;
const { SubMenu, Item } = Menu;

const Sidebar = () => (
  <Sider width={200}>
    <Menu mode="inline" style={{ height: "100%" }}>
      <SubMenu icon={<DeploymentUnitOutlined />} title="Unit testing">
        <Item>
          01 <Link to="/01" />
        </Item>
      </SubMenu>
      <SubMenu icon={<DeploymentUnitOutlined />} title="React testing library">
        <Item>
          03 <Link to="/03" />
        </Item>
        <Item>
          04 <Link to="/04" />
        </Item>
        <Item>
          05 <Link to="/05" />
        </Item>
        <Item>
          06 <Link to="/06" />
        </Item>
      </SubMenu>
    </Menu>
  </Sider>
);

export default Sidebar;
