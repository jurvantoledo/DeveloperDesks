import {MigrationInterface, QueryRunner} from "typeorm";

export class Developer1601546459024 implements MigrationInterface {
    name = 'Developer1601546459024'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "developer" ("id" SERIAL NOT NULL, "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, CONSTRAINT "UQ_5ec8458c4013906f024055a3b25" UNIQUE ("email"), CONSTRAINT "PK_71b846918f80786eed6bfb68b77" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "developer"`);
    }

}
