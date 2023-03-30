import type { Request, RequestHandler, Response } from 'express';
import type { Planet } from '../models/planet.model';
import { getPlanetsService } from '../services/solarsys.service';

const getPlanets: RequestHandler = async (_req: Request, res: Response) => {
  try {
    const planets: Planet[] = await getPlanetsService();
    return res.json(planets);
  } catch (error) {
    return res.status(500).json({ message: 'Something went wrong', error });
  }
};

export { getPlanets };
