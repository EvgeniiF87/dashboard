import { CustomError } from "../../../shared";
import { AuthorizationInput, AuthorizationResponse, RegistrationInput, RegistrationResponse } from "../DTO/auth-dto";

export interface AuthService {
  authorization: (payload: AuthorizationInput) => Promise<AuthorizationResponse | CustomError>;
  registration: (payload: RegistrationInput) => Promise<RegistrationResponse | CustomError>;
}
