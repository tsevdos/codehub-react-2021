import React from "react";

const TabsContent = ({ index, children, isVisible }) => {
  return (
    <article
      id={`content-${index}`}
      className={`tab-content ${isVisible ? "is-visible" : ""}`}
    >
      {children}
    </article>
  );
};

export default TabsContent;
