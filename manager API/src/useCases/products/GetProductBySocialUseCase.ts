import IProductRepository from '../../repositories/products/IProductRepository';
import IGetOneproductRequestDTO from '../../dtos/products/GetOneProductDTO';
import Product from '../../entities/ProductSocial';

export default class GetOneProductBySocialUseCase {
  constructor(private productRepository: IProductRepository) {}

  async execute(social: IGetOneproductRequestDTO): Promise<Array<Product>> {
    const products = await this.productRepository.findBySocial(social.id);
    return products;
  }
}
