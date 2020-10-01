import {MigrationInterface, QueryRunner} from "typeorm";

export class tables1601555316802 implements MigrationInterface {
    name = 'tables1601555316802'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "developer" ("id" SERIAL NOT NULL, "firstName" character varying NOT NULL, "lastName" character varying, "email" character varying NOT NULL, "password" character varying NOT NULL, CONSTRAINT "UQ_5ec8458c4013906f024055a3b25" UNIQUE ("email"), CONSTRAINT "PK_71b846918f80786eed6bfb68b77" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "desk" ("id" SERIAL NOT NULL, "title" character varying, "imageUrl" character varying NOT NULL, "lat" integer, "lng" integer, "developerId" integer, CONSTRAINT "PK_e6f737f60f3b11ef487d158831d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "comment" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "content" character varying NOT NULL, "deskId" integer, "authorId" integer, CONSTRAINT "PK_0b0e4bbc8415ec426f87f3a88e2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "desk" ADD CONSTRAINT "FK_888d0f59fee61a021ce9d77ad7d" FOREIGN KEY ("developerId") REFERENCES "developer"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "comment" ADD CONSTRAINT "FK_7d5458fad9f4977a6ba9d44c370" FOREIGN KEY ("deskId") REFERENCES "desk"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "comment" ADD CONSTRAINT "FK_276779da446413a0d79598d4fbd" FOREIGN KEY ("authorId") REFERENCES "developer"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "comment" DROP CONSTRAINT "FK_276779da446413a0d79598d4fbd"`);
        await queryRunner.query(`ALTER TABLE "comment" DROP CONSTRAINT "FK_7d5458fad9f4977a6ba9d44c370"`);
        await queryRunner.query(`ALTER TABLE "desk" DROP CONSTRAINT "FK_888d0f59fee61a021ce9d77ad7d"`);
        await queryRunner.query(`DROP TABLE "comment"`);
        await queryRunner.query(`DROP TABLE "desk"`);
        await queryRunner.query(`DROP TABLE "developer"`);
    }

}
