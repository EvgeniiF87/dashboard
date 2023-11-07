import { UserModel } from "../domain/user";

export type UserInitState = {
  user: UserModel | null;
  loading: boolean;
  error: string | null;
  usersList: UserModel[];
  userInfo: UserModel | null;
};


export type UpdateUserFields = {
  name: string;
  email: string;
  id: number;
}
