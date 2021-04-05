import IProductRepository from '../../repositories/products/IProductRepository';

export default class GetAllProductsUseCase {
  constructor(private productRepository: IProductRepository) {}

  async execute() {
    const products = await this.productRepository.fildAll();
    return products;
  }
}
