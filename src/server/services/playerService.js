class PlayerService{
    // Normaliza los datos del jugador convocado para la Copa del Mundo
    normalizeSquadPlayer(playerData){
        if (!playerData) {
            console.log("Datos del jugador no disponibles para normalizar.");
            return null;
        }
        return { 
            id: playerData.id,
            name: playerData.name,
            age: playerData.age,
            position: playerData.position ?? null,
            photo: playerData.photo ?? null,
        };
    }
    // Normaliza las estadísticas del jugador en la copa del mundo
    normalizeStatsPlayer(playerData){
        if (!playerData) {
            console.log("Estadisticas del jugador no disponibles para normalizar.");
            return null;
        }
        // Normalizar los datos del jugador para que sean más fáciles de usar en la aplicación
        const player = playerData.player;
        const stats = playerData.statistics[0];
        return { 
            id: player.id,
            name: player.name,
            age: player.age,
            nationality: player.nationality,
            team: stats.team.name ?? null,
            position: stats.games.position ?? null,
            appearances: stats.games.appearences ?? 0,
            minutes: stats.games.minutes ?? 0,
            goals: stats.goals.total ?? 0,
            assists: stats.goals.assists ?? 0,
            yellowCards: stats.cards.yellow ?? 0,
            redCards: stats.cards.red ?? 0,
            rating: Number(stats.games.rating ?? 0) ,
        };
    }
}
export default new PlayerService();