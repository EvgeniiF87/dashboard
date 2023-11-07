import { cacheAdapter } from "../../cache";
import { fetchUrl, fethConfig } from "./fetch-config";
import {  getCacheKey } from "./utils";

interface BaseFetchArgs {
  params?: Record<string, string>;
  url?: string;
  method: string;
  payload?: object;
}

export const baseFetch = async <T>(args: BaseFetchArgs): Promise<T> => {
  const { method, url, params, payload } = args
  
  const _config = fethConfig(method, payload);
  const _url = fetchUrl(url, params);

  let cachedValue: unknown | null = null;

  const cacheKey = getCacheKey(method, _url, payload )

  try {
    
     /** check cache data */
    if (cacheKey) {
      cachedValue = cacheAdapter.getValueInKey(cacheKey);
    }
    if (cachedValue !== null) {
      return cachedValue as T
    }
    
    let response = await window.fetch(_url, _config);

    /** refresh autorization */
    // if (response.status === 401) {
    // const refresh = await fetchRefresh()
    //   if (refresh.status === 'error') {
    //     return refresh
    //   } else {
    //     // const { accessToken, refreshToken } = refresh
        
    //     // _config.headers.Authorization = `Bearer ${accessToken}`;
        
    //     response = await window.fetch(_url, _config);
    //   }
    // }

    const result = await response.json();

     /** add data in cache only query */
    if (!cachedValue && cacheKey) {
      cacheAdapter.addKeyInCache(cacheKey, result);
    }

    return result;
  } catch (error) {
    console.error("Failed in base fetch:", error);
    throw error;
  }
};
