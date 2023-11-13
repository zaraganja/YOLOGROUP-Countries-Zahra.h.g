
import { useEffect, useState } from 'react';
import './App.css';
import { Country } from './interfaces/countryInterfaces';
import { FilterByCodeQuery, CountriesListQuery, RegexSearchQuery } from './queries/queries';
import SearchBox from './components/SearchBox';
import CountriesTable from './components/CountriesTable';
import { useMediaQuery } from "react-responsive";




const App = (props: any) => {
  const [Countries, setCountries] = useState<Country[]>();
  const [searchValue, setsearchValue] = useState<string>();
  const isMobile: boolean = useMediaQuery({ query: `(max-width: 760px)` });

  const getCountriesData = () => {
    fetch("https://countries.trevorblades.com", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query: CountriesListQuery }),
    })
      .then(response => response.json())
      .then(data => {
        //  console.log('GraphQL-Response:', JSON.stringify(data.data.countries));
        const countries = data.data.countries;
        const Data: Country[] = countries;
        setCountries(Data)

      })
      .catch(error => {
        console.error('Error in fetching data:', error);
      });
  }

  useEffect(() => {
    getCountriesData()
  }, [])



  const FilterByCode = async (mysearchValue: string) => {
    await fetch("https://countries.trevorblades.com", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query: FilterByCodeQuery(mysearchValue) }),
    })
      .then(response => response.json())
      .then(data => {
        // console.log('GraphQL-Response:', JSON.stringify(data.data.countries));
        const countries = data.data.countries;
        const Data: Country[] = countries;
        setCountries(Data)
      })
      .catch(error => {
        console.error('Error in fetching data:', error);
      });
  }


  const RegexSearch = async (mysearchValue: string) => {
    console.log(searchValue);
    await fetch("https://countries.trevorblades.com", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query: RegexSearchQuery(mysearchValue) }),
    })
      .then(response => response.json())
      .then(data => {
        console.log('GraphQL-Response:', JSON.stringify(data.data.countries));
        const countries = data.data.countries;
        const Data: Country[] = countries;
        setCountries(Data)
      })
      .catch(error => {
        console.error('Error in fetching data:', error);
      });
  }


  const handleInputChange = (event: any) => {
    // console.log(typeof(event.target.value))
    const alphabets = event.target.value.match(/[A-Z]/g) || [];
    console.log(event.target.value);
    setsearchValue(event.target.value);
    if (event.target.value === "") {
      getCountriesData()
    }
    if (alphabets.length === 1) {
      RegexSearch(event.target.value);
    }
    if (alphabets.length === 2) {
      FilterByCode(event.target.value);
    }

  };

  return (
    <>
      <div className={isMobile ? ` min-h-screen flex flex-col bg-[url('./assets/worldback.jpg')] bg-cover bg-center bg-no-repeat bg-fixed pl-[5%] pt-[1%] ${props.className_div} ` : `min-h-screen flex flex-col bg-[url('./assets/worldback.jpg')] bg-cover bg-fixed pl-[5%] pt-[1%] ${props.className_div}`} style={props?.style_div}>
        <label className=' text-sm font-serif font-semibold text-yellow-50'> YOLO GROUP , Fun , Fast , Fair </label>
        <label className=' text-sm font-serif font-semibold text-yellow-50'>developer: Zahra Hozhabri Ganji</label>
        <label className=' text-sm font-serif font-semibold text-yellow-50'> This project is designed also in responsive mode (PWA)</label>
        <SearchBox
          isMobile={isMobile}
          searchValue={searchValue}
          handleInputChange={handleInputChange}
          getCountriesData={getCountriesData}
          FilterByCode={FilterByCode}
        />
        <CountriesTable isMobile={isMobile} column1={"country name"} column2={"country code"} Countries={Countries} />
      </div>

    </>

  )
}

export default App
