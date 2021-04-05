import IProductRepository from '../../repositories/products/IProductRepository';
import ICreateProductRequestDTO from '../../dtos/products/CreateProductDTO';
import Product from '../../entities/ProductSocial';

export default class CreateProductUseCase {
  constructor(private ProductRepository: IProductRepository) {}

  async execute(data: ICreateProductRequestDTO): Promise<Product> {
    const product = new Product();
    product.productId = data.product_id;
    product.socialId = data.social_id;
    product.categoryId = data.category_id;
    return this.ProductRepository.save(product);
  }
}
