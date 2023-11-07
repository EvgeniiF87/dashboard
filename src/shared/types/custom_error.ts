type ErrorLocationsType = {
  line: number;
  column: number;
};

type ErrorExtensionsType = {
  code: string;
  stacktrace: string[];
};

export type CustomError = {
  errors: {
    message: string;
    locations: ErrorLocationsType[];
    extensions: ErrorExtensionsType;
  }[];
};
