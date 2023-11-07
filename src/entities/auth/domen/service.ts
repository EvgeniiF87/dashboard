import { AuthorizationInput } from "../DTO/auth-dto";


export class AuthStorageService {
  constructor() {}

  public loginAuth({ email, password }: AuthorizationInput): { email: string, password: string } | boolean {
    const validEmail = email.length > 1  
    const validPass = password.length > 1

    return validEmail && validPass
  }



}