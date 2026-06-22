import React from "react";
import "../../assets/styles/nationalTeamsStats.css";

function NationalTeamsStats() {
  return (
    <div className="national-teams-stats mb-4">
      <div className="stats-container">
        <div className="stat-card">
          <div className="stat-icon">
            <i className="fas fa-shield-alt"></i>
          </div>
          <div className="stat-content">
            <h2>48</h2>
            <p>Equipos</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">
            <i className="fas fa-users"></i>
          </div>
          <div className="stat-content">
            <h2>1,248</h2>
            <p>Jugadores convocados</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">
            <i className="fas fa-trophy"></i>
          </div>
          <div className="stat-content">
            <h2>6</h2>
            <p>Confederaciones</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NationalTeamsStats;
