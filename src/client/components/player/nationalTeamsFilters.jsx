import React from "react";

function nationalTeamsFilters() {
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
        <div className="d-flex flex-wrap gap-2 mb-4">
            {filters.map((filter, index) => (
            <button
                key={filter}
                className={`btn ${
                index === 0 ? "btn-success" : "btn-outline-secondary"
                } rounded-pill`}
                >
            {filter}
            </button>
        ))}
      </div>
    </div>
  );
}

export default nationalTeamsFilters;
