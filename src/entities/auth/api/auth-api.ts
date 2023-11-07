import { FetchService } from "../../../shared"
import { AuthorizationInput, AuthorizationResponse, RegistrationInput } from "../DTO/auth-dto"
import { AUTH_LOGIN, AUTH_REGISTRATION } from "./schems"



const registration = async <T>(variables: RegistrationInput): Promise<T> => {
  return FetchService.graphQl({ query: AUTH_REGISTRATION, variables })
}

const authorization = async (variables: AuthorizationInput): Promise<AuthorizationResponse> => {
  return FetchService.graphQl({ query: AUTH_LOGIN, variables })
}

export const AuthApi = {
  registration,
  authorization,
}