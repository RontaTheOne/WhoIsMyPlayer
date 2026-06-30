import React from "react";
import "../../assets/styles/previewPlayers.css";

function PaniniCard({ player }) {
  if (!player) {
    return <div>Datos de los convocados no disponibles</div>;
  }

  const { id, name, age, position, photo } = player;

  const defaultPlayer = {
    flagColors: ["#FCD116", "#003893", "#CE1126"],
    cardColor: "#46b6d2",
    headerColor: "#1a5e8a",
    dataColor: "#124d78",
  };

  return (
    <div className="panini-card-wrap">
      <div
        className="panini-card"
        style={{
          background: defaultPlayer.cardColor,
          boxShadow: `0 0 0 3px ${defaultPlayer.headerColor}`,
        }}
      >
        {/* Header */}
        <div
          className="panini-header"
          style={{ background: defaultPlayer.headerColor }}
        >
          <div className="panini-num">#{id ?? "--"} · {position ?? "--"}</div>

          <div className="panini-ghost">{id ?? "--"}</div>

          <div className="panini-wc">
            <div className="panini-wc-year">2026</div>
            <div className="panini-wc-label">World Cup</div>
          </div>
        </div>

        {/* Photo */}
        <div
          className="panini-photo"
          style={{ background: defaultPlayer.cardColor }}
        >
          <div className="panini-photo-circle" />

          {photo ? (
            <img src={photo} alt={name} />
          ) : (
            <div
              className="panini-initials"
              style={{ color: defaultPlayer.headerColor }}
            >
              --
            </div>
          )}
        </div>

        {/* Name zone */}
        <div
          className="panini-name-zone"
          style={{ background: defaultPlayer.headerColor }}
        >
          <div className="panini-fullname">
            <span></span>
            {name ?? "--"}
          </div>

          <div className="panini-club">
            -- · País
          </div>
        </div>

        {/* Data strip */}
        <div
          className="panini-data-strip"
          style={{ background: defaultPlayer.dataColor }}
        >
          {[
            { val: age ?? "--", key: "Nacimiento" },
            { val: "--", key: "altura" },
            { val: "--", key: "Peso" },
          ].map((item, i) => (
            <React.Fragment key={item.key}>
              {i > 0 && <div className="panini-data-divider" />}
              <div className="panini-data-item">
                <div className="panini-data-val">{item.val}</div>
                <div className="panini-data-key">{item.key}</div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PaniniCard;