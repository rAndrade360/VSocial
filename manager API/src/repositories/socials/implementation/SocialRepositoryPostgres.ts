import { getRepository } from "typeorm";
import ISocialRepository from "../ISocialRepository";
import Social from "../../../entities/Social";

export default class SocialRepositoryPostgres
  implements ISocialRepository {
  async getAll(): Promise<Array<Social>> {
    try {
      const socials = await getRepository(Social).find();
      return socials;
    } catch (error) {
      throw new Error("Error");
    }
  }
}
