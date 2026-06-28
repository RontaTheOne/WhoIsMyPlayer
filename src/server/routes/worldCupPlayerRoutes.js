import { Router } from 'express';
import { getWorldCupTeamPlayers, getWorldCupTeams} from '../controllers/worldCupPlayerController.js';

const router = Router();

console.log("WorldCupPlayerRoutes cargadas");
// Ruta para obtener la lista de jugadores de la Copa del Mundo
router.get('/team/:teamId', getWorldCupTeamPlayers);
router.get('/',getWorldCupTeams);

export default router;