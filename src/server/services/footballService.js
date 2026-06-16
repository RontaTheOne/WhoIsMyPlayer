import apiFootball from '../config/api-Football.js';

class FootballService {
    // Obtiene la lista de equipos nacionales
    async getNationalTeams() {
        try {
            const response = await apiFootball.get('/teams', {
            params: {
                country: "",
            }
            });
            return response.data;
        } catch (error) {
            console.error('Error al obtener equipos nacionales:', error);
            throw error;
        }
    }
    // Obtiene la lista de jugadores de un equipo específico
    async getTeamPlayers(teamId) {
        try {
            const response = await apiFootball.get('/players/squad', {
                params: {
                    team: teamId,
                }
            });
            return response.data;
        } catch (error) {
            console.error('Error al obtener jugadores del equipo:', error);
            throw error;
        }
    }
    // Obtiene las estadísticas de un jugador específico
    async getPlayerStats(playerId, season = '2025') {
        try {
            const response = await apiFootball.get('/players', {
                params: {
                    player: playerId,
                    season: season,
                }
            });
            return response.data;
        } catch (error) {
            console.error('Error al obtener estadísticas del jugador:', error);
            throw error;
        }
    }
}

export default new FootballService();