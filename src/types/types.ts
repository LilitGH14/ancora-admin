export type ResponseGeneralType = {
  ResponseCode: number;
  ResponseData: any;
  ErrorMessage: string;
};

export type ResponseGeneralErrorType = {
  message: string;
};

export type DictionaryType = {
  [key: string]: { [key: string]: string } | string;
};

export type AppContextType = {
  niceSelectData: string;
  setNiceSelectData: React.Dispatch<React.SetStateAction<string>>;
};