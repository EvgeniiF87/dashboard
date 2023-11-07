import { CustomError } from "../../../shared";
import { UserModel } from "../domain/user";
import { UpdateUserInput } from "../DTO/user-dto";


export interface UserService {
  removeUser: (id: number) => Promise<{ data: {removeUser: UserModel } } | CustomError>;
  updateUser: (args: UpdateUserInput) => Promise<{ data: {updateUser: UserModel } } | CustomError>;
  user: (id: number) => Promise<{ data: {user: UserModel } } | CustomError>
  users: () => Promise<{ data: {users: UserModel[] } } | CustomError>
}