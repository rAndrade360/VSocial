import * as Yup from "yup";

interface IProductSchema {
   product_id: number; social_id: number; category_id: number;
}

export async function createproductSchemaValidator(
  productSchema: IProductSchema
) {
  const schema = Yup.object().shape({
    product_id: Yup.number().required(),
    social_id: Yup.number().required(),
    category_id: Yup.number().required(),
  });
  return schema.isValid(productSchema);
}

export async function updateproductSchemaValidator(
  productSchema: IProductSchema
) {
  const schema = Yup.object().shape({
    social_id: Yup.number().required(),
    category_id: Yup.number().required(),
  });
  return schema.isValid(productSchema);
}
