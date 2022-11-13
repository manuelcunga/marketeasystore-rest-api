import { BadRequestException, Injectable } from '@nestjs/common';
import { UserRepository } from 'src/infra/database/typeorm/repositories/users/UserRepositories';
import { CreateUserDTO } from '../../dtos/createUserDTO';

@Injectable()
export class CreateUserService {
  constructor(private createUserRepository: UserRepository) {}

  async execute(data: CreateUserDTO) {
    const alreadyUser = await this.createUserRepository.findByEmail(data.email);

    if (alreadyUser) {
      throw new BadRequestException('Este usuário já existe');
    }

    return await this.createUserRepository.create(data);
  }
}
