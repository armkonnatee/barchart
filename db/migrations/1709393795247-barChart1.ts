import { MigrationInterface, QueryRunner } from "typeorm";

export class BarChart11709393795247 implements MigrationInterface {
    name = 'BarChart11709393795247'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`population\` (\`id\` int UNSIGNED NOT NULL AUTO_INCREMENT, \`countryName\` varchar(255) NOT NULL, \`year\` varchar(255) NOT NULL, \`population\` varchar(255) NOT NULL, \`children_of_1\` varchar(255) NOT NULL, \`children_of_5\` varchar(255) NOT NULL, \`children_of_15\` varchar(255) NOT NULL, \`under_of_25\` varchar(255) NOT NULL, \`under_15_of_64\` varchar(255) NOT NULL, \`older_of_15\` varchar(255) NOT NULL, \`older_of_18\` varchar(255) NOT NULL, \`at_age_1\` varchar(255) NOT NULL, \`at_age_1_to_4\` varchar(255) NOT NULL, \`at_age_5_to_9\` varchar(255) NOT NULL, \`at_age_10_to_14\` varchar(255) NOT NULL, \`at_age_20_to_29\` varchar(255) NOT NULL, \`at_age_30_to_39\` varchar(255) NOT NULL, \`at_age_40_to_49\` varchar(255) NOT NULL, \`at_age_50_to_59\` varchar(255) NOT NULL, \`at_age_60_to_69\` varchar(255) NOT NULL, \`at_age_70_to_79\` varchar(255) NOT NULL, \`at_age_80_to_89\` varchar(255) NOT NULL, \`at_age_90_to_99\` varchar(255) NOT NULL, \`older_than_100\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`population\``);
    }

}
