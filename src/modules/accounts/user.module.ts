import { Module } from '@nestjs/common';
import { CreateUserController } from './controller/create/createUserController';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CreateUserService } from './services/create/createUser.service';
import { User } from './entities/User';
import { UserRepository } from 'src/infra/database/typeorm/repositories/users/UserRepositories';
import { FindAllUsersController } from './controller/findAll/findAllUsers.controller';
import { FindAllUserServuce } from './services/findAll/findAllUser.service';
import { UpdateUserController } from './controller/update/updateUser.controller';
import { UpdateUserService } from './services/update/updateUser.service';
import { LoginController } from './controller/login/login.controller';
import { LoginService } from './services/login/login.service';
import { JwtModule } from '@nestjs/jwt';
import { LocalStrategy } from './services/jwt-strategy/local-jwt.strategy.service';
import { JwtStrategy } from './services/jwt-strategy/jwt.strategy.service';

@Module({
  controllers: [
    CreateUserController,
    UpdateUserController,
    FindAllUsersController,
    LoginController,
  ],
  providers: [
    CreateUserService,
    UpdateUserService,
    FindAllUserServuce,
    LoginService,
    UserRepository,
    LocalStrategy,
    JwtStrategy,
  ],

  imports: [
    JwtModule.register({
      privateKey: process.env.JWT_KEY,
      secretOrPrivateKey: process.env.JWT_KEY,
      signOptions: {
        expiresIn: '2d',
      },
    }),
    TypeOrmModule.forFeature([User]),
  ],

  exports: [TypeOrmModule],
})
export class UserModule {}
