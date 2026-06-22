import React from "react";
import "../../assets/styles/nationalTeamCard.css";

function NationalTeamsCard() {
  return (
    <div className="selection-card">
      {/* Ranking */}
      <div className="rank-badge"> # 1</div>

      {/* Hero */}
      <div className="selection-header">
        <h1 className="selection-code"> 99</h1>

        <h3 className="selection-name">Argentina</h3>

        <p className="selection-confederation">CONMEBOL</p>
      </div>

      {/* Stats */}
      <div className="selection-stats">
        <div className="stat-box">
          <span className="stat-label">CONVOCADOS</span>

          <span className="stat-value"> 26</span>
        </div>

        <div className="stat-box">
          <span className="stat-label">FIFA</span>

          <span className="stat-value"> # 1</span>
        </div>

        <div className="stat-box">
          <span className="stat-label">GRUPO</span>

          <span className="stat-value">A</span>
        </div>
      </div>

      <button className="selection-btn">Ver convocados →</button>
    </div>
  );
}

export default NationalTeamsCard;
