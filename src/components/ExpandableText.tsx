// import React from 'react'

import { useState } from "react";

interface Props {
  maxChar?: number;
  children: string;
}
const ExpandableText = ({ maxChar = 20, children }: Props) => {
  const [showAll, setShowAll] = useState(false);
  const handleToggler = () => {
    setShowAll(!showAll);
  };
  const toShow = children.substring(0, maxChar) + "...";
  if (children.length <= maxChar) return <p>{children}</p>;
  return (
    <div>
      {showAll ? children : toShow}
      <button onClick={handleToggler}>{showAll ? "Less" : "More"}</button>
    </div>
  );
};

export default ExpandableText;
