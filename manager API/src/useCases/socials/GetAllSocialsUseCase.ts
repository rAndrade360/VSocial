import Social from '../../entities/Social';
import ISocialRepository from '../../repositories/socials/ISocialRepository';

export default class GetAllSocialsUseCase {
  constructor(private socialRepository: ISocialRepository) {}

  async execute(): Promise<Array<Social>> {
    const socials = await this.socialRepository.getAll();
    return socials;
  }
}
