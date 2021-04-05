import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'social_products' })
export default class ProductSocial {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ name: 'social_id' })
  socialId: number;

  @Column({ name: 'product_id' })
  productId: number;

  @Column({ name: 'category_id' })
  categoryId: number;
}
