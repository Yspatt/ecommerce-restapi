import { uuid } from "uuidv4";

export class User {
  public readonly id: string;

  public name: string;
  public email: string;
  public password: string;

  public token: string;

  constructor(props: Omit<User,'id'|'token'>,id?: string) {
    Object.assign(this,props);

    if (!id) {
      this.id = uuid();
    }
  }
}