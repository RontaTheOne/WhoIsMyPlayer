import footballService from "./footballService.js";
import playerService from "./playerService.js";
import {worldCupTeams} from "../data/worldCupTeams.js";

class WorldCupService {
  // Obtiene las selecciones de la Copa del Mundo
  getWorldCupTeams(){
    return worldCupTeams;
  }

  async getWorldCupPlayers(teamId) {
    
    const squadResponse =
        await footballService.getTeamPlayers(teamId);

    const players =
        squadResponse.response?.[0]?.players || [];

    return players
        .map(player =>
            playerService.normalizeSquadPlayer(player)
        )
        .filter(Boolean);
  }
}

export default new WorldCupService();
