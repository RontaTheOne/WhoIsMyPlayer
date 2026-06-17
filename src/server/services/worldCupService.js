import footballService from './footballService.js';
import playerService from './playerService.js';

class WorldCupService {
    // Obtiene la lista de equipos nacionales participantes en la Copa del Mundo
    WORLD_CUP_TEAMS = [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
    ];
    async getWorldCupPlayers() {
        const worldCupPlayers = [];
        for (const teamId of this.WORLD_CUP_TEAMS) {
            try {
                const squadResponse = await footballService.getTeamPlayers(teamId);
                const players = squadResponse?.[0]?.response || [];

                for (const playerData of players) {
                    try {
                        const statistics= await footballService.getPlayerStats(playerData.id);
                        const normalizedPlayer = playerService.normalizePlayer(statistics?.[0] || {});
                        worldCupPlayers.push(normalizedPlayer);
                    } catch (error) {
                        console.error(`Error al obtener estadísticas del jugador ${playerData.name}:`, error);
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
