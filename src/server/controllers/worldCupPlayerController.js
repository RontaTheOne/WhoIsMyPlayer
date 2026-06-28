import worldCupService from '../services/worldCupService.js';

// Controlador para obtener jugadores de la Copa del Mundo
export const getWorldCupTeamPlayers = async (req, res) => {
     console.log("Entró al controlador");
    console.log(req.params);
    try {
        const {teamId} = req.params;
        const worldCupPlayers = await worldCupService.getWorldCupPlayers(teamId);
        
        res.json(worldCupPlayers);
    } catch (error) {
        console.error('Error al obtener jugadores de la Copa del Mundo:', error);
        res.status(500).json({ error: 'Error al obtener jugadores de la Copa del Mundo' });
    }
};
//Controlador para obtener las selecciones de la Copa del Mundo
export const getWorldCupTeams = async (req, res) => {
    try{
        const teams = worldCupService.getWorldCupTeams();

        res.status(200).json(teams);
    } catch (error){
       console.error('Error al obtener selecciones de la Copa del Mundo:', error);
        res.status(500).json({ error: 'Error al obtener las selecciones de la Copa del Mundo' });
    }
};

