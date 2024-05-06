import React, { useState } from "react";
import "./FilterBar.css";

function FilterBar({ handleFilter }) {
  const botClasses = [
    "Support",
    "Medic",
    "Assault",
    "Defender",
    "Captain",
    "Witch",
  ];
  const [selectedFilters, setSelectedFilters] = useState([]);

  const handleFilterChange = (botClass) => {
    if (selectedFilters.includes(botClass)) {
      setSelectedFilters(
        selectedFilters.filter((filter) => filter !== botClass)
      );
    } else {
      setSelectedFilters([...selectedFilters, botClass]);
    }
  };

  return (
    <div className="filter-bar">
      <h3>Filter By Class:</h3>
      {botClasses.map((botClass) => (
        <div key={botClass}>
          <label>
            <input
              type="checkbox"
              checked={selectedFilters.includes(botClass)}
              onChange={() => handleFilterChange(botClass)}
            />
            {botClass}
          </label>
        </div>
      ))}
      <button onClick={() => handleFilter(selectedFilters)}>
        Apply Filters
      </button>
    </div>
  );
}

export default FilterBar;
