import { Request, Response } from 'express';
import initVenomBot from '../../config/venom';

class VenomController {
  async initSession(request: Request, response: Response) {
    try {
      initVenomBot();
      return response.send();
    } catch (error) {
      console.log(error);
      return response.status(500).send();
    }
  }
}

const venomController = new VenomController();
export default venomController;
