import React from "react";
import TeamHeader from "../components/player/teamHeader";
import PlayerFilters from "../components/player/playerFilters";
import PositionStats from "../components/player/positionStats";
function Players() {

  return (
    <div className="players">
      <div className="container-fluid">
        <TeamHeader />
        <PlayerFilters />
        <PositionStats />
        
        <div className="row">
          
        </div>
      </div>
    </div>
  );
}

export default Players;
