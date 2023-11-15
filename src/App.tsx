
import { useEffect, useState } from 'react';
import { Country } from './interfaces/countryInterfaces';
import { FilterByCodeQuery, CountriesListQuery, RegexSearchQuery } from './queries/queries';
import SearchBox from './components/SearchBox';
import CountriesTable from './components/CountriesTable';
import { useMediaQuery } from "react-responsive";




const App = (props: any) => {
  const [Countries, setCountries] = useState<Country[]>();
  const [searchValue, setsearchValue] = useState<string>('');
  const isMobile: boolean = useMediaQuery({ query: `(max-width: 760px)` });

  const getCountriesData = async () => {
    try {
      const response = await fetch("https://countries.trevorblades.com", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: CountriesListQuery }),
      });
      const data = await response.json();
      console.log('GraphQL-Response:', JSON.stringify(data.data.countries));
      const countries = data.data.countries;
      const Data: Country[] = countries;
      setCountries(Data);
    } catch (error) {
      console.log('Error in fetching data:', error);
    }
  }

  useEffect(() => {
    getCountriesData()
  }, [])



  const FilterByCode = async (mysearchValue: string) => {
    try {
      const response = await fetch("https://countries.trevorblades.com", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: FilterByCodeQuery(mysearchValue) }),
      });
      const data = await response.json();

      // console.log('GraphQL-Response:', JSON.stringify(data.data.countries));
      const countries = data.data.countries;
      const Data: Country[] = countries;
      setCountries(Data)
    }
    catch (error) {
      console.log('Error in fetching data:', error);
    };
  }


  const RegexSearch = async (mysearchValue: string) => {
    try {
      const response = await fetch("https://countries.trevorblades.com", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: RegexSearchQuery(mysearchValue) }),
      });
      const data = await response.json();

      console.log('GraphQL-Response:', JSON.stringify(data.data.countries));
      const countries = data.data.countries;
      const Data: Country[] = countries;
      setCountries(Data)
    }
    catch (error) {
      console.log('Error in fetching data:', error);
    };
  }
  const setsearchValueFunc = (searchValue: string) => {
    setsearchValue(searchValue);
  }



  return (
    <>
      <div className={isMobile ? ` min-h-screen flex flex-col bg-[url('./assets/worldback.jpg')] bg-cover bg-center bg-no-repeat bg-fixed pl-[5%] pt-[1%] ${props.className_div} ` : `min-h-screen flex flex-col bg-[url('./assets/worldback.jpg')] bg-cover bg-fixed pl-[5%] pt-[1%] ${props.className_div}`} style={props?.style_div}>
        <h3 data-testid="first title" className=' text-sm font-serif font-semibold text-yellow-50'> YOLO GROUP  Fun  Fast  Fair </h3>
        <h3 data-testid="second title" className=' text-sm font-serif font-semibold text-yellow-50'>developer: Zahra Hozhabri Ganji</h3>
        <h3 data-testid="third title" className=' text-sm font-serif font-semibold text-yellow-50'> This project is designed also in responsive mode (PWA)</h3>
        <SearchBox

          isMobile={isMobile}
          searchValue={searchValue}
          setsearchValueFunc={setsearchValueFunc}
          getCountriesData={getCountriesData}
          RegexSearch={RegexSearch}
          FilterByCode={FilterByCode}


        />
        <CountriesTable isMobile={isMobile} column1={"country name"} column2={"country code"} Countries={Countries} />
      </div>

    </>

  )
}

export default App
