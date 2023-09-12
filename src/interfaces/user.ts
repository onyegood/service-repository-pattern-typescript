import { Document } from "mongoose";

interface IUserRepository<T> {
  create(item: T): Promise<T>;
  update(id: string | number, item: T): Promise<T | null>;
  delete(id: string | number): Promise<void>;
  findById(id: string | number): Promise<T | null>;
  findAll(): Promise<Array<T>>;
}

interface IUserModel extends Document {
  name: string;
  email: string;
}

export { IUserModel, IUserRepository };
