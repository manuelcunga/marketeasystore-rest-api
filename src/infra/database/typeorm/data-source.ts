import { DataSource, DataSourceOptions } from 'typeorm';
import 'dotenv/config';
import 'reflect-metadata';

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: process.env.TYPEORM_HOST,
  port: Number(process.env.TYPEORM_PORT),
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  entities: ['dist/src/modules/**/entities/*.{ts,js}`'],
  migrations: ['dist/src/infra/database/typeorm/migrations/*.{ts,js}`'],
};

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;
