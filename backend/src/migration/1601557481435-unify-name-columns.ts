import {MigrationInterface, QueryRunner} from "typeorm";

export class unifyNameColumns1601557481435 implements MigrationInterface {
    name = 'unifyNameColumns1601557481435'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "developer" DROP COLUMN "firstName"`);
        await queryRunner.query(`ALTER TABLE "developer" DROP COLUMN "lastName"`);
        await queryRunner.query(`ALTER TABLE "developer" ADD "name" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "developer" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "developer" ADD "lastName" character varying`);
        await queryRunner.query(`ALTER TABLE "developer" ADD "firstName" character varying NOT NULL`);
    }

}
