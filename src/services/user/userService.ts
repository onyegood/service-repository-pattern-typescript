import { IUserModel } from "../../interfaces/user";
import { UserRepository } from "../../repositories/user/userRepository";

export class UserService {
  constructor(private userRepository: UserRepository) {}

  async createUser(user: IUserModel): Promise<IUserModel> {
    return this.userRepository.create(user);
  }

  async getAllUser(): Promise<IUserModel[]> {
    return this.userRepository.findAll();
  }

  async getUserById(id: string): Promise<IUserModel | null> {
    console.log(id);
    return this.userRepository.findById(id);
  }

  async updateUser(id: string, user: IUserModel): Promise<IUserModel | null> {
    return this.userRepository.update(id, user);
  }

  async deleteUser(id: string): Promise<void> {
    return this.userRepository.delete(id);
  }
}
