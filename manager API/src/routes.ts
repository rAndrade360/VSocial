import { Router } from 'express';
import socialController from './controllers/SocialController';
import productController from './controllers/ProductController';
import venomController from './controllers/VenomController';

const routes = Router();

routes.post('/products', (request, response) => {
  return productController.store(request, response);
});
routes.get('/products', (request, response) => {
  return productController.getAll(request, response);
});
routes.get('/products/:id', (request, response) => {
  return productController.getbyId(request, response);
});

routes.delete('/products/:id/social/:socialId', (request, response) => {
  return productController.delete(request, response);
});


routes.get('/socials', (request, response) => {
  return socialController.getAll(request, response);
});

routes.get('/socials/:socialId/products', (request, response) => {
  return socialController.getBySocial(request, response);
});

routes.get('/wppsession', (request, response) => {
  return venomController.initSession(request, response);
});
// routes.put("/products/:stopId/update", (request, response) => {
//   return productController.update(request, response);
// });
// routes.delete("/products/:stopId/delete", (request, response) => {
//   return productController.delete(request, response);
// });

export default routes;
