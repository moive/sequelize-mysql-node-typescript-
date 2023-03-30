import { Router } from 'express';
import {
  createPlanet,
  deletePlanet,
  getPlanets
} from '../controllers/planet.controller';

const router = Router();

router.get('/all', getPlanets);
router.post('/create', createPlanet);
router.delete('/delete/:id', deletePlanet);

export { router as planetRouter };
