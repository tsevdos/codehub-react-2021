import React, { useState } from "react";
import TabsNavItem from "./TabsNavItem";
import TabsContent from "./TabsContent";

const Tabs = ({ selectedTab = 0, onSelectTab, children }) => {
  const [activeTab, setActiveTab] = useState(selectedTab);
  const tabTitles = React.Children.map(children, (child, i) => ({
    index: i,
    title: child.props.title,
  }));
  const tabPanes = React.Children.map(children, (child, i) => ({
    index: i,
    content: child.props.children,
  }));
  const onTabSelect = (index) => {
    setActiveTab(index);
    onSelectTab && onSelectTab(index);
  };

  return (
    <section className="tabs">
      <nav className="tab-nav">
        {tabTitles.length &&
          tabTitles.map(({ index, title }) => (
            <TabsNavItem
              key={index}
              index={index}
              title={title}
              isActive={activeTab === index}
              onTabSelect={onTabSelect}
            />
          ))}
      </nav>
      <section id="content">
        {tabPanes.length &&
          tabPanes.map(({ index, content, styles }) => (
            <TabsContent
              key={index}
              index={index}
              content={content}
              isVisible={activeTab === index}
              style={styles ?? {}}
            />
          ))}
      </section>
    </section>
  );
};

const TabPane = () => null;

Tabs.TabPane = TabPane;

export default Tabs;
