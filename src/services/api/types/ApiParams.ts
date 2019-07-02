export type ApiParams = { [key: string]: ApiParamKeyTypes | undefined };

export type ApiParamKeyTypes =
  | number
  | string
  | boolean
  | Date
  | number[]
  | string[]
  | boolean[]
  | Date[];
