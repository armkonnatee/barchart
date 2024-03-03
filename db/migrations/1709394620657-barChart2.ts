import { MigrationInterface, QueryRunner } from "typeorm";

export class BarChart21709394620657 implements MigrationInterface {
    name = 'BarChart21709394620657'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`population\` ADD \`at_age_15_to_19\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`population\` DROP COLUMN \`at_age_15_to_19\``);
    }

}
