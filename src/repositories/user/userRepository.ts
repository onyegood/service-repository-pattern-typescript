import { Model } from "mongoose";

import { IUserModel, IUserRepository } from "../../interfaces/user";

export class UserRepository implements IUserRepository<IUserModel> {
  constructor(private userModel: Model<IUserModel>) {}

  async create(user: IUserModel): Promise<IUserModel> {
    return this.userModel.create(user);
  }

  async findAll(): Promise<IUserModel[]> {
    return this.userModel.find();
  }

  async findById(id: string): Promise<IUserModel | null> {
    return this.userModel.findById(id).exec();
  }

  async update(id: string, user: IUserModel): Promise<IUserModel | null> {
    return this.userModel.findByIdAndUpdate(id, user, { new: true }).exec();
  }

  async delete(id: string): Promise<void> {
    await this.userModel.findByIdAndRemove(id).exec();
  }
}
