import { UserInitState } from "./types";

const initialState: UserInitState = {
  user: null,
  loading: false,
  error: null,
  usersList: [],
  userInfo: null,
};

export { initialState };
