import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class ProductSocials1617544582003 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: "social_products",
              columns: [
                {
                  name: "id",
                  type: "bigint",
                  isPrimary: true,
                  isGenerated: true,
                  generationStrategy: "increment",
                },
      
                {
                  name: "social_id",
                  type: "bigint",
                },

                {
                    name: "product_id",
                    type: "bigint",
                },

                {
                    name: "category_id",
                    type: "bigint",
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
      
          await queryRunner.createForeignKey(
            "social_products",
            new TableForeignKey({
              columnNames: ["social_id"],
              referencedTableName: "socials",
              referencedColumnNames: ["id"],
              onUpdate: "CASCADE",
              onDelete: "CASCADE",
            })
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP TABLE if exists social_products CASCADE");
    }

}
