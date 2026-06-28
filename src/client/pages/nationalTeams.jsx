import React from "react";
import { useEffect, useState } from "react";
import NationalTeamsFilters from "../components/player/nationalTeamsFilters.jsx";
import NationalTeamsStats from "../components/player/nationalTeamsStats.jsx";
import NationalTeamsCard from "../components/player/nationalTeamsCard.jsx";

function NationalTeams() {
  const [teams, setTeams] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState("Todos");

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

 const filteredTeams =
    selectedFilter === "Todos" ? teams: 
    teams.filter(
      (team) => team.confederation === selectedFilter
  );

  return (
    <div className="national-teams-page">
      <h1 className="text-center">National Teams</h1>
      <p className="text-center">Welcome to the National Teams page!</p>
      
      <NationalTeamsStats />

       <div className="row justify-content-center mt-2">
          <NationalTeamsFilters
            selectedFilter={selectedFilter}
            onFilterChange={setSelectedFilter}
          />
      </div>

      <div className="row g-3">
        {filteredTeams.map((team) => (
          <div key={team.id} className="col-12 col-md-6 col-lg-3">
            <NationalTeamsCard team={team} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default NationalTeams;
