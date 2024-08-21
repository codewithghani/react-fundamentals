// import React from "react";

import { useState } from "react";
import { produce } from "immer";

const UpdatingObjectsImmer = () => {
  const [bugs, setBugs] = useState([
    {
      id: 1,
      title: "Immer not working properly",
      fixed: false,
    },
    {
      id: 2,
      title: "React-DOM malfunctioned",
      fixed: false,
    },
  ]);
  const handleBug = () => {
    setBugs(
      produce((draft) => {
        const bug = draft.find((bug) => bug.id === 1);
        if (bug) bug.fixed = true;
      })
    );
  };
  return (
    <div>
      {bugs.map((bug) => {
        return (
          <div>
            <p>ID: {bug.id}</p> <p>Title of Bug: {bug.title} </p>
            <p>Fixing Status: {bug.fixed ? "Fixed" : "Not Fixed So Far"}</p>
          </div>
        );
      })}
      <button onClick={handleBug} type="button">
        Fix Bug
      </button>
    </div>
  );
};

export default UpdatingObjectsImmer;
