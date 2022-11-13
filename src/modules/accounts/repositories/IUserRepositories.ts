import { CreateUserDTO } from '../dtos/createUserDTO';
import { UpdateUserDTO } from '../dtos/updateUser.dto';
import { User } from '../entities/User';

export interface IUserRepository {
  create(data: CreateUserDTO): Promise<User>;
  findByEmail(email: string): Promise<User>;
  findAllUsers(): Promise<User[]>;
  update(id: string, data: UpdateUserDTO): Promise<User>;
  find(id: string): Promise<User>;
}
