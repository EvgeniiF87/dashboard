
export const getSearchParams = <T, U>(paramsSearch: U) => {
  const params: {[key: string]: string | number | T} = {}

  for (const field in paramsSearch) {
    const value = paramsSearch[field] as T
    if (!value) continue;
    params[field] = value
  }

  return params
}