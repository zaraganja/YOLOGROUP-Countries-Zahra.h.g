
export const FilterByCodeQuery=(searchValue:string | undefined) => `
query {
countries(filter:{code:{eq:"${searchValue}"}}) {
  name
  code
  emoji
}
}`

export const CountriesListQuery = `
query {
  countries {
    name
    code
    emoji
  }
}`;

export const RegexSearchQuery =(searchValue:string | undefined)=> `
query {
  countries(filter:{code:{regex:"${searchValue}"}}) {
    name
    code
    emoji
  }
  }
`
