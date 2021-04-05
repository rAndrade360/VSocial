import IProductRepository from "../../repositories/products/IProductRepository";
import IGetOneproductRequestDTO from "../../dtos/products/GetOneProductDTO";
import Product from "../../entities/ProductSocial";

export default class GetOneStopUseCase {
  constructor(private productRepository: IProductRepository) {}

  async execute(product: IGetOneproductRequestDTO): Promise<Product> {
    const products = await this.productRepository.findById(product.id);
    return products;
  }
}
