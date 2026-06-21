import React from "react";
import "../../assets/styles/previewPlayers.css";

function PreviewPlayers({ player }) {
  if (!player) {
    return <div>Datos de los convocados no disponibles</div>;
  }

  const {id,name, age, position, photo} = player;

  return (
    <div className="player-card border-0 shadow-lg overflow-hidden">
      {/* Imagen de fondo */}
      <div className="player-image-container">
        <img src={photo} alt={name} className="player-image" />

        {/* Overlay degradado */}
        <div className="player-overlay"></div>

        {/* Nombre */}
        <div className="player-content text-center text-white">
          <h2 className="fw-bold player-name">{name}</h2>
            <div className="player-stats">
              <div className="stat-item">
                  <small>EDAD</small>
                  <h4>{age}</h4>
              </div>

              <div className="stat-item">
                  <small>POSICIÓN</small>
                  <h6>{position}</h6>
              </div>

              <div className="stat-item">
                  <small>ID</small>
                  <h6>{id}</h6>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PreviewPlayers;
