import worldCupService from '../services/worldCupService.js';

// Controlador para manejar la solicitud de obtener jugadores de la Copa del Mundo
export const getWorldCupPlayers = async (req, res) => {
    try {
        const worldCupPlayers = await worldCupService.getWorldCupPlayers();
        console.log("PLAYERS A ENVIAR:");
        console.log(worldCupPlayers.length);
        res.json(worldCupPlayers);
    } catch (error) {
        console.error('Error al obtener jugadores de la Copa del Mundo:', error);
        res.status(500).json({ error: 'Error al obtener jugadores de la Copa del Mundo' });
    }
};
