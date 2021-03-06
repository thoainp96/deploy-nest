"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.migration202203031646324644075 = void 0;
class migration202203031646324644075 {
    constructor() {
        this.name = 'migration202203031646324644075';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE \`city\` (\`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`created_by\` varchar(255) NOT NULL, \`updated_by\` varchar(255) NOT NULL, \`Id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`is_active\` tinyint NOT NULL, PRIMARY KEY (\`Id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`college\` (\`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`created_by\` varchar(255) NOT NULL, \`updated_by\` varchar(255) NOT NULL, \`Id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`is_active\` tinyint NOT NULL, PRIMARY KEY (\`Id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`comment\` (\`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`created_by\` varchar(255) NOT NULL, \`updated_by\` varchar(255) NOT NULL, \`Id\` int NOT NULL AUTO_INCREMENT, \`content\` varchar(5000) NOT NULL, \`post_id\` int NOT NULL, \`user_id\` int NOT NULL, \`is_deleted\` tinyint NOT NULL, PRIMARY KEY (\`Id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`post_liked_users\` (\`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`created_by\` varchar(255) NOT NULL, \`updated_by\` varchar(255) NOT NULL, \`Id\` int NOT NULL AUTO_INCREMENT, \`post_id\` int NOT NULL, \`user_id\` int NOT NULL, \`is_deleted\` tinyint NOT NULL, PRIMARY KEY (\`Id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`limit_access\` (\`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`created_by\` varchar(255) NOT NULL, \`updated_by\` varchar(255) NOT NULL, \`Id\` int NOT NULL AUTO_INCREMENT, \`post_id\` int NOT NULL, \`user_id\` int NOT NULL, PRIMARY KEY (\`Id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`photo\` (\`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`created_by\` varchar(255) NOT NULL, \`updated_by\` varchar(255) NOT NULL, \`Id\` int NOT NULL AUTO_INCREMENT, \`file_name\` varchar(255) NOT NULL, \`post_id\` int NOT NULL, \`is_deleted\` tinyint NOT NULL, PRIMARY KEY (\`Id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`post\` (\`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`created_by\` varchar(255) NOT NULL, \`updated_by\` varchar(255) NOT NULL, \`Id\` int NOT NULL AUTO_INCREMENT, \`content\` varchar(10000) NULL, \`privacy_setting_id\` enum ('Only me', 'Public', 'Friends', 'Friends except', 'Specific friends') NOT NULL, \`likes\` int NOT NULL, \`user_id\` int NOT NULL, \`is_deleted\` tinyint NOT NULL, PRIMARY KEY (\`Id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`profile\` (\`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`created_by\` varchar(255) NOT NULL, \`updated_by\` varchar(255) NOT NULL, \`Id\` int NOT NULL AUTO_INCREMENT, \`first_name\` varchar(255) NOT NULL, \`last_name\` varchar(255) NOT NULL, \`gender\` varchar(255) NOT NULL, \`birthday\` datetime NOT NULL, \`phone\` varchar(255) NULL, \`email\` varchar(255) NULL, \`bio\` varchar(255) NULL, \`avatar\` varchar(255) NULL, \`city_id\` int NULL, \`school_id\` int NULL, \`college_id\` int NULL, \`workplace_id\` int NULL, \`relationship_id\` int NULL, PRIMARY KEY (\`Id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`school\` (\`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`created_by\` varchar(255) NOT NULL, \`updated_by\` varchar(255) NOT NULL, \`Id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`is_active\` tinyint NOT NULL, PRIMARY KEY (\`Id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`relationship\` (\`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`created_by\` varchar(255) NOT NULL, \`updated_by\` varchar(255) NOT NULL, \`Id\` int NOT NULL AUTO_INCREMENT, \`user_id_1\` int NOT NULL, \`user_id_2\` int NOT NULL, PRIMARY KEY (\`Id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`user\` (\`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`created_by\` varchar(255) NOT NULL, \`updated_by\` varchar(255) NOT NULL, \`Id\` int NOT NULL AUTO_INCREMENT, \`username\` varchar(255) NOT NULL, \`user_type\` enum ('Personal', 'Business') NOT NULL, \`user_status\` enum ('Active', 'Inactive') NOT NULL, \`language\` enum ('VI', 'ENG') NOT NULL, \`profile_id\` int NOT NULL, PRIMARY KEY (\`Id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`workplace\` (\`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`created_by\` varchar(255) NOT NULL, \`updated_by\` varchar(255) NOT NULL, \`Id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`is_active\` tinyint NOT NULL, PRIMARY KEY (\`Id\`)) ENGINE=InnoDB`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE \`workplace\``);
        await queryRunner.query(`DROP TABLE \`user\``);
        await queryRunner.query(`DROP TABLE \`relationship\``);
        await queryRunner.query(`DROP TABLE \`school\``);
        await queryRunner.query(`DROP TABLE \`profile\``);
        await queryRunner.query(`DROP TABLE \`post\``);
        await queryRunner.query(`DROP TABLE \`photo\``);
        await queryRunner.query(`DROP TABLE \`limit_access\``);
        await queryRunner.query(`DROP TABLE \`post_liked_users\``);
        await queryRunner.query(`DROP TABLE \`comment\``);
        await queryRunner.query(`DROP TABLE \`college\``);
        await queryRunner.query(`DROP TABLE \`city\``);
    }
}
exports.migration202203031646324644075 = migration202203031646324644075;
//# sourceMappingURL=1646324644075-migration20220303.js.map