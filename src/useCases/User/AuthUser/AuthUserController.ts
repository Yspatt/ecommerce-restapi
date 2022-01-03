import { Request, Response } from "express";
import { AuthUserUseCase } from "./AuthUserUseCase";

export class AuthUserController {

  constructor(
    private authUserUseCase: AuthUserUseCase,
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    try {
    const user = await this.authUserUseCase.execute({
      email,
      password,
    })

    return response.status(201).send(user);
    } catch(err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.'
      })
    }
  }
}