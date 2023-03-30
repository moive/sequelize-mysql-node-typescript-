import { Router } from 'express';
import { getPlanets } from '../controllers/planet.controller';

const router = Router();

router.get('/all', getPlanets);

export { router as planetRouter };
