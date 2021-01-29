import React from "react";
import Tabs from "./Tabs";
import { Typography } from "antd";

const { Title } = Typography;

const App = () => (
  <div>
    <Title>CC 03: Compound components</Title>
    <hr />
    <Tabs>
      <Tabs.TabPane title="Tab 1">
        <h2>First Tab</h2>
        <p>My first tab content</p>
      </Tabs.TabPane>
      <Tabs.TabPane title="Tab 2">
        <h2>Second Tab</h2>
        <p>My second tab content</p>
      </Tabs.TabPane>
      <Tabs.TabPane title="Tab 3">
        <h2>Third Tab</h2>
        <p>My third tab content</p>
      </Tabs.TabPane>
    </Tabs>
  </div>
);

export default App;
