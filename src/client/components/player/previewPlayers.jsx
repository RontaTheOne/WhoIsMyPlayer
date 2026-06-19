import React from "react";
import "../../assets/styles/previewPlayers.css";
function PreviewPlayers() {
  return (
    <div className="player-card border-0 shadow-lg overflow-hidden">
      {/* Imagen de fondo */}
      <div className="player-image-container">
        <img src="" alt="" className="player-image" />

        {/* Overlay degradado */}
        <div className="player-overlay"></div>

        {/* Nombre */}
        <div className="player-content text-center text-white">
          <h2 className="fw-bold player-name">Cristiano Ronaldo</h2>

          <div className="player-info row mt-4">
            <div className="col-4">
              <small className="text-uppercase text-light opacity-75">
                Edad
              </small>
              <h5>38</h5>
            </div>

            <div className="col-4">
              <small className="text-uppercase text-light opacity-75">
                Posición
              </small>
              <h6>Delantero</h6>
            </div>

            <div className="col-4">
              <small className="text-uppercase text-light opacity-75">ID</small>
              <h6>1</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PreviewPlayers;
