import StopController from "./ProductController";
import {
  createProductUseCase,
  getAllProductsUseCase,
  getOneProductUseCase,
  updateProductUseCase,
  deleteProductUseCase,
} from "../../useCases/products";

const productController = new StopController(
  createProductUseCase,
  getAllProductsUseCase,
  getOneProductUseCase,
  updateProductUseCase,
  deleteProductUseCase,
);

export default productController;
