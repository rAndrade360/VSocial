import { Request, Response } from 'express';
import GetAllSocialsUseCase from '../../useCases/socials/GetAllSocialsUseCase';
import GetProductBySocialUseCase from '../../useCases/products/GetProductBySocialUseCase';

export default class SocialController {
  constructor(
    private getAllSocialsUseCase: GetAllSocialsUseCase,
    private getProductBySocialUseCase: GetProductBySocialUseCase,
  ) {}

  async getAll(request: Request, response: Response) {
    try {
      const socials = await this.getAllSocialsUseCase.execute();
      if (!socials) return response.status(404).send();

      return response.json(socials);
    } catch (error) {
      return response.status(400).json({ error: 'A erro occurred' });
    }
  }

  async getBySocial(request: Request, response: Response) {
    const { socialId } = request.params;
    try {
      const socials = await this.getProductBySocialUseCase.execute({ id: Number(socialId) });

      return response.json(socials);
    } catch (error) {
      console.log(error);
      return response.status(400).json({ error: 'A erro occurred' });
    }
  }
}
