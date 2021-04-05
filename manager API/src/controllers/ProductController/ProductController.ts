import { Request, Response } from 'express';
import CreateProductUseCase from '../../useCases/products/CreateProductUseCase';
import GetAllProductsUseCase from '../../useCases/products/GetAllProductsUseCase';
import GetOneProductUseCase from '../../useCases/products/GetOneProductUseCase';
import UpdateProductUseCase from '../../useCases/products/UpdateProductUseCase';
import DeleteProductUseCase from '../../useCases/products/DeleteProductUseCase';
import { createproductSchemaValidator } from '../../validators/productValidator';

class StopController {
  constructor(
    private createProductUseCase: CreateProductUseCase,
    private getAllProductsUseCase: GetAllProductsUseCase,
    private getOneProductUseCase: GetOneProductUseCase,
    private updateProductUseCase: UpdateProductUseCase,
    private deleteProductUseCase: DeleteProductUseCase,
  ) {}

  async store(request: Request, response: Response) {
    const { product_id, social_id, category_id } = request.body;
    if (!(await createproductSchemaValidator({ product_id, social_id, category_id }))) {
      return response.status(400).json({ error: 'Exists an incorrect value!' });
    }
    try {
      const stop = await this.createProductUseCase.execute({ product_id, social_id, category_id });
      return response.json(stop);
    } catch (error) {
      return response.status(500).json({ error: 'Could not Store' });
    }
  }

  async getAll(request: Request, response: Response) {
    try {
      const stops = await this.getAllProductsUseCase.execute();
      return response.json(stops);
    } catch (error) {
      return response.status(400).json({ error: 'Could not fetch stops' });
    }
  }

  async getbyId(request: Request, response: Response) {
    const { stopId } = request.params;
    try {
      const stop = await this.getOneProductUseCase.execute({ id: Number(stopId) });

      if (!stop) return response.status(404).send();

      return response.json(stop);
    } catch (error) {
      return response.status(400).json({ error: 'Could not fetch stop' });
    }
  }

  // async update(request: Request, response: Response) {
  //   const { stopId } = request.params;
  //   const { name, latitude, longitude } = request.body;

  //   const isValid = await updateStopSchemaValidator({
  //     name,
  //     latitude,
  //     longitude,
  //   });

  //   if (!isValid) {
  //     return response.status(400).json({ error: "Exists an incorrect value!" });
  //   }

  //   try {
  //     const updated = await this.updateProductUseCase.execute({
  //       name,
  //       latitude,
  //       longitude,
  //       id: Number(stopId),
  //     });
  //     if (!updated) return response.status(404).send();
  //     return response.json(updated);
  //   } catch (error) {
  //     return response.status(400).json({ error: "Could not update" });
  //   }
  // }

  async delete(request: Request, response: Response) {
    const { id, socialId } = request.params;
    try {
      await this.deleteProductUseCase.execute({ id: Number(id), socialId: Number(socialId) });
      return response.json({ message: 'Deleted!' });
    } catch (error) {
      return response.status(400).json({ error: 'Could not delete' });
    }
  }
}

export default StopController;
