import CreateProductUseCase from "./CreateProductUseCase";
import GetAllProductsUseCase from "./GetAllProductsUseCase";
import GetOneProductUseCase from "./GetOneProductUseCase";
import GetProductBySocialUseCase from "./GetProductBySocialUseCase";
import UpdateProductUseCase from "./UpdateProductUseCase";
import DeleteProductUseCase from "./DeleteProductUseCase";

import ProductRepositoryPostgres from "../../repositories/products/implementations/ProductRepositoryPostgres";

const productRepositoryPostgres = new ProductRepositoryPostgres();

const createProductUseCase = new CreateProductUseCase(productRepositoryPostgres);
const getAllProductsUseCase = new GetAllProductsUseCase(productRepositoryPostgres);
const getOneProductUseCase = new GetOneProductUseCase(productRepositoryPostgres);
const getProductBySocialUseCase = new GetProductBySocialUseCase(productRepositoryPostgres);
const updateProductUseCase = new UpdateProductUseCase(productRepositoryPostgres);
const deleteProductUseCase = new DeleteProductUseCase(productRepositoryPostgres);

export {
  createProductUseCase,
  getAllProductsUseCase,
  getProductBySocialUseCase,
  getOneProductUseCase,
  updateProductUseCase,
  deleteProductUseCase,
};
