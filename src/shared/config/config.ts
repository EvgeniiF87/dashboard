import { API_ENDPOINT } from "../constants/base-api-urls";


export const CONFIG_APP = {
  API_ENDPOINT,
  API_UPLOADS:'http://78.24.180.193:7777',
  FETCH_CACHE_TIME: 15000,
  ACCESS_TOKEN_LOCALE_STORAGE: 'ACCESS_TOKEN',
  REFRESH_TOKEN_LOCALE_STORAGE: 'REFRESH_TOKEN',
  ACCESS_TOKEN_COOKIE: 'ACCESS_TOKEN',
  REFRESH_TOKEN_COOKIE: 'REFRESH_TOKEN',
  CLOUDINARY_NAME: 'ds289tkqj',
  CLOUDINARY_UPLOAD_PRESET: 'startap',
  CLOUDINARY_URL: `https://api.cloudinary.com/v1_1/ds289tkqj/image/upload`,
  AUTH_LOGIN_REGISTR_IMAGE_SIDE: 'https://i.ibb.co/sv557px/login-side.jpg',
  FETH_CACHE_TIME: 120000, // 2 min
} as const;
