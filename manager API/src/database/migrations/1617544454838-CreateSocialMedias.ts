import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateSocialMedias1617544454838 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: "socials",
              columns: [
                {
                  name: "id",
                  type: "bigint",
                  isPrimary: true,
                  isGenerated: true,
                  generationStrategy: "increment",
                },
      
                {
                  name: "name",
                  type: "varchar",
                },
      
                {
                  name: "created_at",
                  type: "timestamp",
                  default: "now()",
                },
                {
                  name: "updated_at",
                  type: "timestamp",
                  default: "now()",
                },
              ],
            }),
            true
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP TABLE if exists socials CASCADE");
    }

}
