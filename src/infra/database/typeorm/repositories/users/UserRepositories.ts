import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IUserRepository } from 'src/modules/accounts/repositories/IUserRepositories';
import { User } from 'src/modules/accounts/entities/User';
import { CreateUserDTO } from 'src/modules/accounts/dtos/createUserDTO';
import { UpdateUserDTO } from 'src/modules/accounts/dtos/updateUser.dto';

@Injectable()
export class UserRepository implements IUserRepository {
  constructor(
    @InjectRepository(User)
    private readonly ormRepository: Repository<User>,
  ) {}

  public async create(data: CreateUserDTO): Promise<User> {
    const user = this.ormRepository.create(data);
    await this.ormRepository.save(user);
    return user;
  }

  public async findByEmail(email: string) {
    return await this.ormRepository.findOne({ where: { email } });
  }

  public async findAllUsers(): Promise<User[]> {
    const users = await this.ormRepository.find({
      select: ['id', 'name', 'email', 'createdAt'],
    });
    return users;
  }

  public async update(id: string, data: UpdateUserDTO): Promise<User> {
    const user = await this.ormRepository.preload({
      id,
      ...data,
    });

    return await this.ormRepository.save(user);
  }

  public async find(id: string): Promise<User> {
    const Finduser = await this.ormRepository.findOne({ where: { id } });
    return Finduser;
  }
}
