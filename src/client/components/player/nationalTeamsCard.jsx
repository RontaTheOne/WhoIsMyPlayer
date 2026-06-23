import React from "react";
import "../../assets/styles/nationalTeamCard.css";

function NationalTeamsCard({team}) {
  return (
    <div className="selection-card">
      {/* Ranking */}
      <div className="rank-badge">  
        -
      </div>

      {/* Hero */}
      <div className="selection-header">
        <img
          src={team.logo}
          alt={team.name}
          className="selection-logo"
        />
        <h3 className="selection-name">
          {team.name}
        </h3>
        <p className="selection-confederation">
          {team.confederation}
        </p>
      </div>

      {/* Stats */}
      <div className="selection-stats">
        <div className="stat-box">
          <span className="stat-label">CONVOCADOS</span>
          <span className="stat-value"> --</span>
        </div>

        <div className="stat-box">
          <span className="stat-label">FIFA</span>
          <span className="stat-value"> --</span>
        </div>

        <div className="stat-box">
          <span className="stat-label">GRUPO</span>
          <span className="stat-value">{team.group || "-"}</span>
        </div>
      </div>

      <button className="selection-btn">Ver convocados →</button>
    </div>
  );
}

export default NationalTeamsCard;
