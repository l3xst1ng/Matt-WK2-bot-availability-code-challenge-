import React from "react";
import "./SortBar.css";
function SortBar({ handleSort }) {
  const sortOptions = [
    { label: "Health", value: "health" },
    { label: "Damage", value: "damage" },
    { label: "Armor", value: "armor" },
  ];

  return (
    <div className="sort-bar">
      <h3>Sort By:</h3>
      {sortOptions.map((option) => (
        <button key={option.value} onClick={() => handleSort(option.value)}>
          {option.label}
        </button>
      ))}
    </div>
  );
}

export default SortBar;
