import { TypeOrmModuleOptions } from '@nestjs/typeorm';
export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'holidays',
  password: 'holidays',
  database: 'holidaysdb',
  entities: [__dirname + '/../**/*.entity.js'],
  synchronize: true,
};
