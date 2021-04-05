import {MigrationInterface, QueryRunner} from "typeorm";

import SocialSeeds from '../seeds/social.seed';
import Social from '../../entities/Social';

export class SeedSocials1617545290850 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.manager.getRepository(Social).save(SocialSeeds);
    }

    public async down(_: QueryRunner): Promise<void> {
    }

}
