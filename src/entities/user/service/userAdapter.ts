import {  UserService } from "../application"
import { UserApi } from '../api'


export const userAdapter: UserService = {
    updateUser(args) {
        return UserApi.update(args)
    },
    removeUser(id: number) {
      return UserApi.remove({id})
    },
    user(id) {
        return UserApi.getUserId({id})
    },
    users() {
        return UserApi.getAllUsers()
    },
}
