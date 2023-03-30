import { Router } from 'express';
import { createPlanet, getPlanets } from '../controllers/planet.controller';

const router = Router();

router.get('/all', getPlanets);
router.post('/create', createPlanet);

export { router as planetRouter };
