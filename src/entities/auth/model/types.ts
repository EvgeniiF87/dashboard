
export type AuthInitState = {
  token: string | null;
  role: string;
  userId: number | null;
  authorization: string | boolean,
  loading: boolean;
  error: string | null;
};
