import React from "react";
import "../../assets/styles/teamStats.css";

function TeamHeader() {
  return (
     <div className="team-header">
      {/* Círculos decorativos */}
      <div className="header-circle circle-1"></div>
      <div className="header-circle circle-2"></div>

      <div className="team-header-content">

        <div className="team-info">
          <div className="team-badge">
            CO
          </div>

          <h2 className="team-name">
            Colombia
          </h2>
        </div>

        <div className="team-stat">
          <span>CONVOCADOS</span>
          <h3>26</h3>
        </div>

        <div className="team-stat">
          <span>EDAD PROM.</span>
          <h3>27.4</h3>
        </div>

        <div className="team-stat">
          <span>GRUPO</span>
          <h3 className="group-text">H</h3>
        </div>

        <div className="team-stat">
          <span>RANKING FIFA</span>
          <h3>#11</h3>
        </div>

      </div>
    </div>
  );
}

export default TeamHeader;
