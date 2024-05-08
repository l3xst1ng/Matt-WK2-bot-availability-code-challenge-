import React, { useState, useEffect } from "react";
import "./FilterBar.css";

function FilterBar({ handleFilter }) {
  const [selectedFilters, setSelectedFilters] = useState([]);

  useEffect(() => {
    handleFilter(selectedFilters);
  }, [handleFilter, selectedFilters]);

  const handleFilterChange = (filter, isChecked) => {
    if (isChecked) {
      setSelectedFilters([...selectedFilters, filter]);
    } else {
      setSelectedFilters(selectedFilters.filter((f) => f !== filter));
    }
    handleFilter(selectedFilters);
  };

  const botClasses = [
    "Support",
    "Medic",
    "Assault",
    "Defender",
    "Captain",
    "Witch",
  ];

  return (
    <div className="filter-bar">
      <h3>Filter By Class</h3>
      {botClasses.map((botClass) => (
        <div key={botClass} className="filter-option">
          <input
            type="checkbox"
            id={botClass}
            checked={selectedFilters.includes(botClass)}
            onChange={(e) => handleFilterChange(botClass, e.target.checked)}
          />
          <label htmlFor={botClass}>{botClass}</label>
        </div>
      ))}
    </div>
  );
}

export default FilterBar;
