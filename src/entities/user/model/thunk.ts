import { createAppThunk } from "../../../shared";
import { UpdateUserInput } from "../DTO/user-dto";
import { userAdapter } from "../service/userAdapter";


export const fetchUpdateUser = createAppThunk(
  "user/fetchUpdateUser",
  async (args: UpdateUserInput, { rejectWithValue }) => {

    const updateUser = await userAdapter.updateUser(args);  // TODO Erorr

    if ("errors" in updateUser) {
      return rejectWithValue(
        `Failed fetch  all events: ${updateUser.errors[0].message}`
      );
    }

    return args;
  }
);

export const fetchRemoveUser = createAppThunk(
  "user/fetchRemoveUser",
  async ({ id }: { id: number }, { rejectWithValue }) => {
  
    const removeUser = await userAdapter.removeUser(id);  // TODO Erorr

    if ("errors" in removeUser) {
      return rejectWithValue(
        `Failed fetch  all events: ${removeUser.errors[0].message}`
      );
    }

    return { id };
  }
);

export const fetchAllUsers = createAppThunk(
  "user/fetchAllUsers",
  async (_, { rejectWithValue }) => {

    const allUsers = await userAdapter.users()

    if ("errors" in allUsers) {
      return rejectWithValue(
        `Failed fetch  all events: ${allUsers.errors[0].message}`
      );
    }

    return allUsers.data.users;
  }
);

export const fetchOneUserId = createAppThunk(
  "user/fetchOneUserId",
  async ({ id }: { id: number }, { rejectWithValue }) => {

    const user = await userAdapter.user(id);

    if ("errors" in user) {
      return rejectWithValue(
        `Failed fetch  all events: ${user.errors[0].message}`
      );
    }

    return user.data.user;
  }
);


