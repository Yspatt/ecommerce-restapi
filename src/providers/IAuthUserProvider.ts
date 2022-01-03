import { User } from "../entities/User";

export interface IAuthUserProvider {
  auth(user: User): Promise<string>;
}