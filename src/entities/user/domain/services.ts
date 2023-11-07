
import { USerEntity } from "./user";

export class UserService {
  constructor() {}

  public createNewUser({ email, name }: { email: string, name: string })  {
    
    const validEmail = email // тут валидация email 
    const validName = name // тут валидация  name

    const newEvent = new USerEntity({ email: validEmail, name: validName });

    return newEvent.userCreateFields;
  }
}
