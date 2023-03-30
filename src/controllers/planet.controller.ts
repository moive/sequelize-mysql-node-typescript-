import type { Request, RequestHandler, Response } from 'express';
import type { Planet } from '../models/planet.model';
import {
  createPlanetService,
  deletePlanetService,
  getPlanetsService
} from '../services/solarsys.service';

const getPlanets: RequestHandler = async (_req: Request, res: Response) => {
  try {
    const planets: Planet[] = await getPlanetsService();
    return res.json(planets);
  } catch (error) {
    return res.status(500).json({ message: 'Something went wrong', error });
  }
};

const createPlanet: RequestHandler = async (req: Request, res: Response) => {
  try {
    const planet: Planet = await createPlanetService(req.body);
    return res.json(planet);
  } catch (error) {
    return res.status(500).json({ message: 'Something went wrong', error });
  }
};

const deletePlanet: RequestHandler = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const response = await deletePlanetService(Number(id));
    if (response === 0)
      return res.status(404).json({ message: 'Planet not found' });
    return res.json({ message: 'Planet deleted successfully' });
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

export { getPlanets, createPlanet, deletePlanet };
