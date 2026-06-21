import React from "react";
import { useState, useEffect } from "react";
import TeamHeader from "../components/player/teamHeader.jsx";
import PlayerFilters from "../components/player/playerFilters.jsx";
import PositionStats from "../components/player/positionStats.jsx";
import PreviewPlayer from "../components/player/previewPlayers.jsx";

function Players() {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/world-cup-players/players")
      .then((response) => response.json())
      .then((data) => {
        setPlayers(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h3>Cargando jugadores...</h3>;
  }

  return (
    <div className="players-page">
      <div className="container">
        <TeamHeader />
        <PositionStats />
        <PlayerFilters />
       
        <h2 className="text-center my-4">Jugadores convocados</h2>

        <div className="row">
          {players.map((player) => (
            <PreviewPlayer className="col-sm-2 col-md-3 col-lg-4"  key={player.id} player={player} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Players;
