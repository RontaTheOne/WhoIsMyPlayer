import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import TeamHeader from "../components/player/teamHeader.jsx";
import PlayerFilters from "../components/player/playerFilters.jsx";
import PositionStats from "../components/player/positionStats.jsx";
import PreviewPlayer from "../components/player/previewPlayers.jsx";

function Players() {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);
  const { teamId } = useParams();
  console.log("TEAM ID:", teamId);
  useEffect(() => {
    fetch(`http://localhost:3000/world-cup-teams/team/${teamId}`)
      .then((response) => response.json())
      .then((data) => {
        setPlayers(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, [teamId]);

  if (loading) {
    return <h3>Cargando jugadores...</h3>;
  }

  return (
    <div className="players-page">
      <div className="container">
        <TeamHeader />
        <br />
        <PositionStats />
        <PlayerFilters />

        <h2 className="text-center my-4">Jugadores convocados</h2>
        <div className="row justify-content-center g-4">
          {players.map((player) => (
            <div
              key={player.id}
              className="col-sm-12 col-md-6 col-lg-3 d-flex justify-content-center"
            >
              <PreviewPlayer player={player} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Players;
