import { IMailProvider, IMessage } from "../IMailProvider";

import { sign } from 'jsonwebtoken'
import { IAuthUserProvider } from "../IAuthUserProvider";
import { User } from "../../entities/User";

export class AuthUserProvider implements IAuthUserProvider {

  constructor() {}

  async auth(user: User): Promise<string> {
    
    const token = sign(
      {id: user.id},
      process.env.JWT_TOKEN_KEY
    )

    return token;

  }
}