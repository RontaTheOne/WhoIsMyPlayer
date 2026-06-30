import React from "react";
import "../../assets/styles/teamStats.css";

function PlayerFilters() {
  const filters = [
    "Todos",
    "Porteros",
    "Defensas",
    "Mediocampistas",
    "Delanteros",
  ];

  return (
    <div className="player-filters mb-4">
      <div className="mb-3">
        <input
          type="text"
          className="form-control bg-dark text-white border-secondary"
          placeholder="Buscar jugador..."
        />
      </div>

      <div className="d-flex flex-wrap gap-2 mb-4">
        {filters.map((filter, index) => (
          <button
            key={filter}
            className={`btn rounded-pill ${
              index === 0 ? "filter-active" : "filter-btn"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>
    </div>
  );
}

export default PlayerFilters;