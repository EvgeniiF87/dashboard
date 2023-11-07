import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from "../../../shared";
import { uploadsAdapter } from '../../uploads/service';
import { AuthStorageService } from "../domen/service";
import { AuthorizationInput, RegistrationInput } from '../DTO/auth-dto';
import { authAction, useAuthSelect } from "../model";
import { fetchAuthorization, fetchRegistration } from "../model/thunk";


const authStorageService = new AuthStorageService()

export function useRegistration() {
  const dispatch = useAppDispatch();

  const handleRegistration = async(payload: RegistrationInput) => {
    const { email, name, phone, file, password } = payload
    let avatarPath = null;

    if (file && file instanceof File) {
     avatarPath = await uploadsAdapter.downLoad({ file })
    }

    dispatch(fetchRegistration({
      avatar: typeof avatarPath === 'string' ? avatarPath : '',
      email: email,
      name: name,
      phone: phone,
      roleId: 1,
      password,
    }))

  }

  return { handleRegistration };
}

export function useFetchAuthorization() {
  const dispatch = useAppDispatch();

  const handleAuthorization = (payload: AuthorizationInput) => {
    const validationFields = authStorageService.loginAuth(payload)

    if (!validationFields) return;

    dispatch(fetchAuthorization(payload))
  }

  return { handleAuthorization };
}

export function useLogoutUser() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate()

  const logoutUser = () => {
    dispatch(authAction.logoutAuth())
    navigate('/login-by-password')
  }

  return { logoutUser };
}

export function useAuth() {
  const { authorization } = useAuthSelect();

  return { authorization };
}
