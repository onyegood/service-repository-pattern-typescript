import User from "../../models/user";
import { UserRepository } from "../../repositories/user/userRepository";
import { UserService } from "../../services/user/userService";

const userRepository = new UserRepository(User);
export const userService = new UserService(userRepository);
