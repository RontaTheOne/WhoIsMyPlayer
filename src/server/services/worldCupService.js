import footballService from "./footballService.js";
import playerService from "./playerService.js";

class WorldCupService {
  // Obtiene la lista de equipos nacionales participantes en la Copa del Mundo
  WORLD_CUP_TEAMS = [1];
  async getWorldCupPlayers() {
    const worldCupPlayers = [];
    for (const teamId of this.WORLD_CUP_TEAMS) {
        try {
            const squadResponse = await footballService.getTeamPlayers(teamId);
            console.log(
              "SQUAD RESPONSE:",
              JSON.stringify(squadResponse, null, 2)
            );
            const players =  squadResponse?.response?.[0]?.players || [];

          console.log("PLAYERS EXTRAIDOS:", players.length);
        for (const playerData of players) {
          try {
            const statistics = await footballService.getPlayerStats(
              playerData.id,
            );

            const normalizedPlayer = playerService.normalizePlayer(
              statistics?.response?.[0],
            );

            worldCupPlayers.push(normalizedPlayer);
              console.log(
                "NORMALIZANDO:",
                playerData.name
              );
          } catch (error) {
            console.error(
              `Error al obtener estadísticas del jugador ${playerData.name}:`,
              error,
            );
          }
        }

        } catch (error) {
            console.error(`Error al obtener la squad del equipo ${teamId}:`, error);
        }
    }
    return worldCupPlayers;
  }
}

export default new WorldCupService();
