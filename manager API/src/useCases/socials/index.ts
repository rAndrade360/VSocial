import GetAllSocialsUseCase from "./GetAllSocialsUseCase";
import SocialRepositoryPostgres from "../../repositories/socials/implementation/SocialRepositoryPostgres";

const socialRepositoryPostgres = new SocialRepositoryPostgres();

const getSocialUseCase = new GetAllSocialsUseCase(
  socialRepositoryPostgres
);

export { getSocialUseCase };
