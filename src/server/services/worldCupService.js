import footballService from "./footballService.js";
import playerService from "./playerService.js";

class WorldCupService {
  // Obtiene los convocados para la Copa del Mundo
  WORLD_CUP_TEAMS = [1];
  async getWorldCupPlayers() {
    const worldCupPlayers = [];

    for (const teamId of this.WORLD_CUP_TEAMS) {
      try {
        const squadResponse =
        await footballService.getTeamPlayers(teamId);

          const players =
            squadResponse?.response?.[0]?.players || [];

          console.log(
            `PLAYERS EXTRAIDOS: ${players.length}`
          );

        for (const playerData of players) { 
          try { 
            const normalizedPlayer = playerService.normalizeSquadPlayer( playerData );
            if (normalizedPlayer) { 
              worldCupPlayers.push(normalizedPlayer);
            } 
            console.log( "NORMALIZANDO:", playerData.name );
          } catch (error) {
           console.error( `Error al normalizar al jugador ${playerData.name}:`, error );
          }
        }
      } catch (error) {
        console.error(`Error al obtener la squad del equipo ${teamId}:`, error);
      }
    }

    console.log(
      "TOTAL JUGADORES PROCESADOS:",
      worldCupPlayers.length
    );

    return worldCupPlayers;
  }
}

export default new WorldCupService();
