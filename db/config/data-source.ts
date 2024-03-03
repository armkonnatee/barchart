import { DataSource, DataSourceOptions } from "typeorm";
import * as dotenv from 'dotenv';
import { TypeOrmModuleAsyncOptions, TypeOrmModuleOptions } from "@nestjs/typeorm";
dotenv.config();

const database_type: any = process.env.DATABASE_TYPE;

export const dataSourceOptions: DataSourceOptions = {
    type: database_type,
    host: process.env.DATABASE_HOST,
    port: Number(process.env.DATABASE_PORT),
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    synchronize: false,
    entities: ['dist/src/**/*.entity.{js,ts}'],
    migrations: ['dist/db/migrations/*{.ts,.js}'],
  };

  export const dataSource = new DataSource(dataSourceOptions);

  export const typeOrmAsyncConfig: TypeOrmModuleAsyncOptions = {
    useFactory: async (): Promise<TypeOrmModuleOptions> => {
      return dataSourceOptions;
    },
  };