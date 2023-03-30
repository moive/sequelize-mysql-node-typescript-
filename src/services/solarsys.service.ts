import { Planet } from '../models/planet.model';

const getPlanetsService = async (): Promise<any> => {
  return await Planet.findAll();
};

export { getPlanetsService };
