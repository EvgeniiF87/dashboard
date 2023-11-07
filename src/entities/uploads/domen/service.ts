import { AuthorizationInput } from "../../auth/DTO/auth-dto";


export class AuthStorageService {
  constructor() {}

  public loginAuth({ login, password }: AuthorizationInput): AuthorizationInput | null {

    const validLogin = login.length > 1  
    const validPass = password.length > 1

    if (!validLogin || !validPass) return null;

    return {
      login: login,
      password: password,
      email: login,
    }
  }



}