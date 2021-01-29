import React from "react";

const TabsContent = ({ index, content, isVisible }) => {
  return (
    <article
      id={`content-${index}`}
      className={`tab-content ${isVisible ? "is-visible" : ""}`}
    >
      {content}
    </article>
  );
};

export default TabsContent;
