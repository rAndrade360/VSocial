import Product from '../../entities/ProductSocial';

export default interface IProductRepository {
  save(Product: Product): Promise<Product>;
  fildAll(): Promise<Array<Product>>;
  findById(ProductId: number): Promise<Product>;
  findBySocial(socialId: number): Promise<Array<Product>>;
  update(Product: Product): Promise<Product>;
  delete(ProductId: number, socialId?: number): Promise<void>;
}
