import React, { useEffect, useState } from 'react';
import apiIntegration from '../../services/apiIntegration';
import productData from '../../data/products';
import { Button, Col, Row, ListGroup, ListGroupItem } from 'react-bootstrap';

// import { Container } from './styles';

const Facebook: React.FC = () => {
  const [products, setProducts] = useState<any>([]);

  const saveInSocial = async (productId: number, categoryId: number, socialId: number) => {
    try {

      await apiIntegration.post('/products', {
        product_id: productId,
        category_id: categoryId, 
        social_id: socialId
       });
       const prod = products.map((product: any) => {
         if(Number(product.Id) === Number(productId)){
           if(socialId === 1){
             product.isInWhatsapp = !product.isInWhatsapp
           }else {
            product.isInFacebook = !product.isInFacebook
           }
         }
         return product;
       });

       setProducts(prod);

    } catch (error) {
      alert("Não foi possível salvar :(")
    }
    
  }

  const removeInSocial = async (productId: number, socialId: number) => {
    try {

      const result = await apiIntegration.delete(`/products/${productId}/social/${socialId}`);
      console.log(result); 
      const prod = products.map((product: any) => {
         if(Number(product.Id) === Number(productId)){
           if(socialId === 1){
             product.isInWhatsapp = !product.isInWhatsapp
           }else {
            product.isInFacebook = !product.isInFacebook
           }
         }
         return product;
       });

       setProducts(prod);

    } catch (error) {
      alert("Não foi possível salvar :(")
    }
    
  }

  useEffect(()=> {
    async function getProducts() {
       const response = await apiIntegration.get('/products');

       const storedProducts = response.data;

       const produ = productData.filter(prod => storedProducts.some((el: any) => { 
           console.log(el)
           return Number(el.productId) === Number(prod.Id) && el.socialId == 2}))

       console.log(produ)

      // const productsAndSKUIds = response.data.data;
      // const products = Object.keys(productsAndSKUIds).map(async (product) => {
      //   const responseProduct = await apiVtex.get(`/catalog/pvt/product/${product}`);
      //   const skus = productsAndSKUIds[product];
      //   const returnedSkus = skus.map(async (sku: number) => {
      //     const responseSKU = await apiVtex.get(`/catalog/pvt/stockkeepingunit/${sku}`);
      //     return responseSKU.data;
      //   });
      //   return {
      //     ...responseProduct.data,
      //     skus: returnedSkus
      //   }
      // });
      setProducts(produ);
      console.log(produ);
    }

    getProducts();
  }, [ ]);

  return (
    <div>
     <h1>Catálogo do Facebook</h1>
      <div>
        <ListGroup>
          {products.map((product: any) => (
            <ListGroupItem key={product.Id}>
              <Row>
                <Col sm={6}>
              {product.Name}
                </Col>
                {/* <Col sm={3}>
                  {product.isInWhatsapp? <Button variant="danger" onClick={() => {saveInSocial(Number(product.Id), Number(product.CategoryId), Number(1))}} >Remover do Whatsapp</Button> :
                  <Button variant="success" onClick={() => {saveInSocial(Number(product.Id), Number(product.CategoryId), Number(1))}} >Adicionar ao Whatsapp</Button>}
                </Col>*/}
                <Col sm={3}>
                   <Button variant="danger" onClick={() => {removeInSocial(Number(product.Id), Number(2))}} >Remover do Facebook</Button>
                </Col> 
              </Row>
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
    </div>
  );
}

export default Facebook;