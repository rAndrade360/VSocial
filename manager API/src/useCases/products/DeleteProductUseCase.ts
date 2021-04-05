import IGetOneProductDTO from '../../dtos/products/GetOneProductDTO';
import IProductRepository from '../../repositories/products/IProductRepository';

export default class DeleteProductUseCase {
  constructor(private productRepository: IProductRepository) {}

  async execute(line: IGetOneProductDTO): Promise<void> {
    await this.productRepository.delete(line.id, line.socialId);
  }
}
