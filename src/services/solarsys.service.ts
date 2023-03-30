import { Planet } from '../models/planet.model';

const getPlanetsService = async (): Promise<any> => {
  return await Planet.findAll();
};

const createPlanetService = async (data: any): Promise<any> => {
  return await Planet.create({ ...data });
};

export { getPlanetsService, createPlanetService };
