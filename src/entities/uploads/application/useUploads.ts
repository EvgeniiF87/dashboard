export {}
// import { useNavigate } from 'react-router-dom';
// import { useAppDispatch } from "../../../shared";
// import { AuthStorageService } from "../domen/service";
// import { authAction, useAuthSelect } from "../model";
// import { fetchAuthorization } from "../model/thunk";
// import { AuthorizationInput } from "./port";

// const authStorageService = new AuthStorageService()

// export function useRegistration() {
//   const dispatch = useAppDispatch();

//   const handleAuthorization = ({ login, password }: AuthorizationInput) => {

//     const validationFields = authStorageService.loginAuth({ login, password })

//     if (!validationFields) return;

//     dispatch(fetchAuthorization(validationFields))

//   }

//   return { handleAuthorization };
// }

// export function useFetchAuthorization() {
//   const dispatch = useAppDispatch();

//   const handleAuthorization = ({ login, password }: AuthorizationInput) => {

//     const validationFields = authStorageService.loginAuth({ login, password })

//     if (!validationFields) return;

//     dispatch(fetchAuthorization(validationFields))

//   }

//   return { handleAuthorization };
// }

// export function useLogoutUser() {
//   const dispatch = useAppDispatch();
//   const navigate = useNavigate()

//   const logoutUser = () => {
//     dispatch(authAction.logoutAuth())
//     navigate('/login')
//   }

//   return { logoutUser };
// }

// export function useAuth() {
//   const { authorization } = useAuthSelect();

//   return { authorization };
// }
