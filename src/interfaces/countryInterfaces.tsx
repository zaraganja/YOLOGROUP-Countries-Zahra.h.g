

export interface Country {
  name: string;
  code: string;
  emoji: string
}

export interface setsearchValueFuncType {
  (searchValue: string): void;
}

export interface getCountriesDataType {
  (): Promise<void>;
}

export interface RegexSearchType {
  (mysearchValue: string): Promise<void>;
}

export interface FilterByCodeType {
  (mysearchValue: string): Promise<void>;
}

export interface SearchBoxTypes {
  searchValue: string | undefined;
  isMobile: boolean
  setsearchValueFunc: setsearchValueFuncType;
  getCountriesData: getCountriesDataType;
  RegexSearch: RegexSearchType;
  FilterByCode: FilterByCodeType;
}

export interface tableTypes {
  column1: string,
  column2: string,
  Countries: Country[] | undefined,
  isMobile: boolean
}

export interface CloseAlertType {
  (): void
}

export interface alertTypes {
  alertText: string,
  CloseAlert: CloseAlertType,
  showAlert: boolean
}