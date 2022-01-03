import { User } from "../../../entities/User";
import { IAuthUserProvider } from "../../../providers/IAuthUserProvider";
import { IUserRepository } from "../../../repositories/IUserRepository";
import { IAuthUserDTO } from "./AuthUserDTO";

export class AuthUserUseCase {

  constructor(
    private userRepository: IUserRepository,
    private authProvider: IAuthUserProvider,
  ) {}

  async execute(data: IAuthUserDTO): Promise<User> {
    const user = await this.userRepository.findByEmail(data.email);

    if (!user) {
      throw new Error('User does not exists');
    }

    if (user.password !== data.password) {
      throw new Error('Password does not match.');
    }

    const token = await this.authProvider.auth(user);
    
    await this.userRepository.refreshToken(data.email, token);
    
    return user;

  }
}