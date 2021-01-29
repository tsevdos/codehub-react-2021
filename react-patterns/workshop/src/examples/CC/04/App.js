import React from "react";
import Tabs from "./Tabs";
import { Typography } from "antd";

const { Title } = Typography;

const App = () => {
  const onSelectTab = (tabIndex) => {
    console.log(`do something with the selected tab index: ${tabIndex}`);
  };

  return (
    <div>
      <Title>
        CC 03: Compound components (lifted state, more options, better API)
      </Title>
      <hr />
      {/* remove props from <Tabs> component */}
      <Tabs selectedTab={1} onSelectTab={onSelectTab}>
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
};

export default App;
