import React from "react";
import "./SortBar.css";

function SortBar({ handleSorting }) {
  return (
    <div className="sort-bar">
      <h3>Sort By</h3>
      <button value="health" onClick={handleSorting}>
        Health
      </button>
      <button value="damage" onClick={handleSorting}>
        Damage
      </button>
      <button value="armor" onClick={handleSorting}>
        Armor
      </button>
    </div>
  );
}

export default SortBar;
