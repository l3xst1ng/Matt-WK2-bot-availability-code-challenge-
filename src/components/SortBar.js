import React from "react";

function SortBar({ botSorting }) {
  return (
    <div>
      <h3>Sort By:</h3>
      <button onClick={() => botSorting("health")}>Health</button>
      <button onClick={() => botSorting("damage")}>Damage</button>
      <button onClick={() => botSorting("armor")}>Armor</button>
    </div>
  );
}

export default SortBar;
