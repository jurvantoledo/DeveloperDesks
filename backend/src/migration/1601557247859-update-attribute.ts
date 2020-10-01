import {MigrationInterface, QueryRunner} from "typeorm";

export class updateAttribute1601557247859 implements MigrationInterface {
    name = 'updateAttribute1601557247859'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "desk" RENAME COLUMN "imageUrl" TO "uri"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "desk" RENAME COLUMN "uri" TO "imageUrl"`);
    }

}
