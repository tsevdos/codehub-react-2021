import React, { useState } from "react";
import Tabs from "./Tabs";
import TabHeader from "./TabHeader";
import TabContainer from "./TabContainer";
import TabsNavItem from "./TabsNavItem";
import TabsContent from "./TabsContent";
import { Typography } from "antd";

const { Title } = Typography;

const App = () => {
  const [activeTab, setActiveTab] = useState(2);
  const onSelectTab = (index) => {
    setActiveTab(index);
  };

  return (
    <div>
      <Title>CC 02: Component composition</Title>
      <hr />
      <Tabs>
        <TabHeader>
          <TabsNavItem
            index={1}
            title="Tab 1"
            isActive={activeTab === 1}
            onSelectTab={onSelectTab}
          />
          <TabsNavItem
            index={2}
            title="Tab 2"
            isActive={activeTab === 2}
            onSelectTab={onSelectTab}
          />
          <TabsNavItem
            index={3}
            title="Tab 3"
            isActive={activeTab === 3}
            onSelectTab={onSelectTab}
          />
        </TabHeader>
        <TabContainer>
          <TabsContent index={1} isVisible={activeTab === 1}>
            <h2>First Tab</h2>
            <p>My first tab content</p>
          </TabsContent>
          <TabsContent index={2} isVisible={activeTab === 2}>
            <h2>Second Tab</h2>
            <p>My second tab content</p>
          </TabsContent>
          <TabsContent index={3} isVisible={activeTab === 3}>
            <h2>Third Tab</h2>
            <p>My third tab content</p>
          </TabsContent>
        </TabContainer>
      </Tabs>
    </div>
  );
};

export default App;
