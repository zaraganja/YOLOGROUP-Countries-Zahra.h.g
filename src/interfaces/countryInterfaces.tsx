

export interface Country {
    name: string;
    code: string;
    emoji :string
  }

  export interface SearchBoxTypes {
    searchValue: string | undefined  ;
    handleInputChange : any;
    getCountriesData : any;
    FilterByCode:any;
    isMobile: boolean

  }
  
  export interface tableTypes {
    column1 : string,
    column2: string,
    Countries :Country[] | undefined,
    isMobile : boolean
  }