import React from "react";
import NationalTeamsFilters from "../components/player/nationalTeamsFilters.jsx";
import NationalTeamsStats from "../components/player/nationalTeamsStats.jsx";
import NationalTeamsCard from "../components/player/nationalTeamsCard.jsx";

function NationalTeams() {
  return (
    <div className="national-teams-page">
      <h1 className="text-center">National Teams</h1>
      <p className="text-center">Welcome to the National Teams page!</p>
      <NationalTeamsStats />

      <NationalTeamsFilters />

      <div className="row g-4">
        <div className="col-12 col-md-6 col-lg-4">
          <NationalTeamsCard />
        </div>
      </div>
    </div>
  );
}

export default NationalTeams;
