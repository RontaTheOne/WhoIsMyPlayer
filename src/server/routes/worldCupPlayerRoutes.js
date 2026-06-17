import { Router } from 'express';
import { getWorldCupPlayers } from '../controllers/worldCupPlayerController.js';

const router = Router();
// Ruta para obtener la lista de jugadores de la Copa del Mundo
router.get('/players', getWorldCupPlayers);

export default router;