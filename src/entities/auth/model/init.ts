import { AuthInitState } from "./types";

const initialState: AuthInitState = {
  token: null,
  role: '',
  userId: null,
  authorization: false,
  loading: false,
  error: null,
};

export { initialState };
