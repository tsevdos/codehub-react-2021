import React from "react";

const TabsNavItem = ({ index, title, isActive, onTabSelect }) => {
  const onClick = (e) => {
    e.preventDefault();
    onTabSelect(index);
  };

  return (
    <a
      className={`tab-nav-item ${isActive ? "active" : ""}`}
      href={`#tab-${index}`}
      id={`tab-${index}`}
      onClick={onClick}
    >
      {title}
    </a>
  );
};

export default TabsNavItem;
