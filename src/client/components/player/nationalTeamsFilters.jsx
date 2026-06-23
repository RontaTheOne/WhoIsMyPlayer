import React from "react";

function nationalTeamsFilters({ selectedFilter, onFilterChange }) {
  const filters = [
    "Todos",
    "CONMEBOL",
    "UEFA",
    "CONCACAF",
    "CAF",
    "AFC",
    "OFC",
  ];

  return (
    <div className="national-teams-filters mb-4">
      <div className="row g-2 justify-content-center mb-4">
        {filters.map((filter) => (
          <div key={filter} className="col-6 col-sm-auto">
            <button
              className={`btn w-100 ${
                selectedFilter === filter
                  ? "filter-active"
                  : "btn-outline-secondary"
              } rounded-pill`}
              onClick={() => onFilterChange(filter)}
            >
              {filter}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default nationalTeamsFilters;
