import IUpdateproductRequestDTO from '../../dtos/products/UpdateProductDTO';
import IProductRepository from '../../repositories/products/IProductRepository';
import Product from '../../entities/ProductSocial';

export default class UpdateStopUseCase {
  constructor(private productRepository: IProductRepository) {}

  async execute(data: IUpdateproductRequestDTO) {
    const product = new Product();
    product.id = data.id;
    product.categoryId = data.category_id;
    product.socialId = data.social_id;
    return this.productRepository.update(product);
  }
}
