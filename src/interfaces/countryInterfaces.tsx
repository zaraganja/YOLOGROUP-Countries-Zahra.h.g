

export interface Country {
  name: string;
  code: string;
  emoji: string
}

export interface SearchBoxTypes {
  searchValue: string | undefined;
  isMobile: boolean
  setsearchValueFunc: any;
  getCountriesData: any;
  RegexSearch: any;
  FilterByCode: any;
}

export interface tableTypes {
  column1: string,
  column2: string,
  Countries: Country[] | undefined,
  isMobile: boolean
}