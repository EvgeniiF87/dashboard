import { CONFIG_APP, CookieService, createAppThunk } from "../../../shared";
import { AuthorizationInput, RegistrationInput } from "../DTO/auth-dto";
import { authAdapter } from "../service";


export const fetchRegistration = createAppThunk(
  "auth/fetchRegistration",
  async (payload: RegistrationInput, { rejectWithValue }) => {

    const response = await authAdapter.registration(payload);

    console.log('fetchRegistration:', response)

    if ('errors' in response) {
      return rejectWithValue(`Failed registration: ${response.errors[0].message}`)
    }
    

    return response;
  }
);

export const fetchAuthorization = createAppThunk(
  "auth/fetchAuthorization",
  async (payload: AuthorizationInput, { rejectWithValue }) => {

    const response = await authAdapter.authorization(payload);

    if ('errors' in response) {
      return rejectWithValue(`${response.errors[0].message}`)
    }

    CookieService.set(response.data.signIn.token, CONFIG_APP.ACCESS_TOKEN_COOKIE)
    
    return response.data.signIn;
  }
);
