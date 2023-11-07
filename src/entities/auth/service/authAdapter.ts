import { AuthApi } from "../api/auth-api";
import {  AuthService } from "../application/port";


export const authAdapter: AuthService = {
   authorization(payload) {
       return AuthApi.authorization(payload)
   },
   registration(payload) {
       return AuthApi.registration(payload)
   },
};
