import { Request, Response } from 'express';

import createUser from './services/CreateUser';

export function helloWorld(resquest: Request, response: Response) {
  const user = createUser('Hiago Souza', 'hiagofss98@gmail.com', '123456789');
  return response.json(user);
}
