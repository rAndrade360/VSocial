import { getRepository } from 'typeorm';
import IProductRepository from '../IProductRepository';
import Product from '../../../entities/ProductSocial';
import IGetOneProductRequestDTO from '../../../dtos/products/GetOneProductDTO';

export default class ProductRepositoryPostgres implements IProductRepository {
  async save(product: IGetOneProductRequestDTO): Promise<Product> {
    // const transactionManager = await connection.transaction();
    try {
      const productStored = await getRepository(Product).save(product);

      return productStored;
    } catch (error) {
      throw new Error('An error occurred while storing in database');
    }
  }

  async fildAll(): Promise<Product[]> {
    try {
      // const Products = await connection("Products").select("id", "name");
      const Products = await getRepository(Product).find();
      return Products;
    } catch (error) {
      throw new Error('An error occurred while searching in database.');
    }
  }

  async findById(ProductId: number): Promise<Product> {
    try {
      const Products = await getRepository(Product).findOne({ id: ProductId });
      return Products;
    } catch (error) {
      throw new Error('An error occurred while searching in database.');
    }
  }

  async findBySocial(socialId: number): Promise<Array<Product>> {
    try {
      const Products = await getRepository(Product).find({ where: { socialId } });
      return Products;
    } catch (error) {
      throw new Error('An error occurred while searching in database.');
    }
  }

  async update(product: Product) {
    try {
      const updated = await getRepository(Product)
        .createQueryBuilder()
        .update()
        .set({
          categoryId: product.categoryId,
          socialId: product.socialId,
        })
        .where('id=:id', { id: product.id })
        .returning('id, name')
        .execute();

      return updated.raw[0];
    } catch (error) {
      throw new Error('An error ocurred when try update Product');
    }
  }

  async delete(ProductId: number, socialId: number): Promise<void> {
    try {
      await getRepository(Product).delete({ productId: ProductId, socialId });
    } catch (error) {
      throw new Error('An error ocurred when try update Product');
    }
  }
}
