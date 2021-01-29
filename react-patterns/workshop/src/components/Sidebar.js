import React from "react";
import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import { DeploymentUnitOutlined } from "@ant-design/icons";

const { Sider } = Layout;
const { SubMenu, Item } = Menu;

const Sidebar = () => (
  <Sider width={200}>
    <Menu mode="inline" style={{ height: "100%" }}>
      <SubMenu icon={<DeploymentUnitOutlined />} title="PCC">
        <Item>
          01: Starting Point <Link to="/ssc/1" />
        </Item>
        <Item>
          02: Container and presentational component <Link to="/ssc/2" />
        </Item>
        <Item>
          03: Container and presentational component <Link to="/ssc/3" />
        </Item>
        <Item>
          PCC exercise <Link to="/ssc/exercise" />
        </Item>
      </SubMenu>
      <SubMenu icon={<DeploymentUnitOutlined />} title="HoC">
        <Item>
          01: Starting Point <Link to="/hoc/1" />
        </Item>
        <Item>
          02: withData HoC <Link to="/hoc/2" />
        </Item>
        <Item>
          03: Configurable withData HoC <Link to="/hoc/3" />
        </Item>
        <Item>
          04: HοC composition <Link to="/hoc/4" />
        </Item>
        <Item>
          HoC exercise <Link to="/hoc/exercise" />
        </Item>
      </SubMenu>
      <SubMenu icon={<DeploymentUnitOutlined />} title="Render props">
        <Item>
          01: Starting Point <Link to="/rp/1" />
        </Item>
        <Item>
          02: Render prop <Link to="/rp/2" />
        </Item>
        <Item>
          03: Render prop with other props <Link to="/rp/3" />
        </Item>
        <Item>
          04: Render prop with multiple arguments <Link to="/rp/4" />
        </Item>
        <Item>
          05: Children render prop <Link to="/rp/5" />
        </Item>
        <Item>
          RP exercise <Link to="/rp/exercise" />
        </Item>
      </SubMenu>
      <SubMenu icon={<DeploymentUnitOutlined />} title="Custom hooks">
        <Item>
          01: Starting Point <Link to="/ch/1" />
        </Item>
        <Item>
          02: Custom hook <Link to="/ch/2" />
        </Item>
        <Item>
          03: Pass parameters to custom hook <Link to="/ch/3" />
        </Item>
        <Item>
          04: Return more complex data <Link to="/ch/4" />
        </Item>
        <Item>
          CH exercise <Link to="/ch/exercise" />
        </Item>
      </SubMenu>
      <SubMenu icon={<DeploymentUnitOutlined />} title="Compound Components">
        <Item>
          01: Starting point <Link to="/cc/1" />
        </Item>
        <Item>
          02: Component composition <Link to="/cc/2" />
        </Item>
        <Item>
          03: Compound components <Link to="/cc/3" />
        </Item>
        <Item>
          04: Compound components <Link to="/cc/4" />
        </Item>
      </SubMenu>
    </Menu>
  </Sider>
);

export default Sidebar;
