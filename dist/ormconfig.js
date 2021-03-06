"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
if (!module.hot) {
    process.env.NODE_ENV = process.env.NODE_ENV || 'development';
}
dotenv.config({
    path: `.${process.env.NODE_ENV}.env`,
});
module.exports = {
    type: 'mysql',
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    entities: ['src/core/entities/**/*.entity{.ts,.js}'],
    migrations: ['src/migrations/*{.ts,.js}'],
};
//# sourceMappingURL=ormconfig.js.map