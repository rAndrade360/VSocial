import SocialController from './SocialController';
import { getSocialUseCase } from '../../useCases/socials';
import { getProductBySocialUseCase } from '../../useCases/products';

const socialController = new SocialController(getSocialUseCase, getProductBySocialUseCase);

export default socialController;
