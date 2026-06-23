import React from "react";
import { useEffect, useState } from "react";
import NationalTeamsFilters from "../components/player/nationalTeamsFilters.jsx";
import NationalTeamsStats from "../components/player/nationalTeamsStats.jsx";
import NationalTeamsCard from "../components/player/nationalTeamsCard.jsx";

function NationalTeams() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const response = await fetch("http://localhost:3000/world-cup-teams");

        const data = await response.json();

        setTeams(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTeams();
  }, []);

  return (
    <div className="national-teams-page">
      <h1 className="text-center">National Teams</h1>
      <p className="text-center">Welcome to the National Teams page!</p>
      <NationalTeamsStats />

      <NationalTeamsFilters />

      <div className="row g-4">
        {teams.map((team) => (
          <div key={team.id} className="col-12 col-md-6 col-lg-4">
            <NationalTeamsCard team={team} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default NationalTeams;
