import React from "react";
import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import { DeploymentUnitOutlined } from "@ant-design/icons";

const { Sider } = Layout;
const { SubMenu, Item } = Menu;

const Sidebar = () => (
  <Sider width={200}>
    <Menu mode="inline" style={{ height: "100%" }}>
      <SubMenu icon={<DeploymentUnitOutlined />} title="Hooks">
        <Item>
          useState() <Link to="/hooks/use-state" />
        </Item>
        <Item>
          useEffect() example 1 <Link to="/hooks/use-effect" />
        </Item>
        <Item>
          useEffect() example 2 <Link to="/hooks/use-effect-2" />
        </Item>
        <Item>
          useEffect() example 3 <Link to="/hooks/use-effect-3" />
        </Item>
        <Item>
          useEffect() example 4 <Link to="/hooks/use-effect-4" />
        </Item>
        <Item>
          useReducer() <Link to="/hooks/use-reducer" />
        </Item>
      </SubMenu>
      <SubMenu icon={<DeploymentUnitOutlined />} title="Forms and events">
        <Item>
          Input <Link to="/forms/simple-input" />
        </Item>
        <Item>
          Input and textarea <Link to="/forms/input-and-textarea" />
        </Item>
        <Item>
          Select, radio button and checkbox{" "}
          <Link to="/forms/select-radio-button-checkbox" />
        </Item>
        <Item>
          Form submit (async)
          <Link to="/forms/form-submit-async" />
        </Item>
        <Item>
          UI library form submit
          <Link to="/forms/ant-design-form-submit" />
        </Item>
      </SubMenu>
    </Menu>
  </Sider>
);

export default Sidebar;
