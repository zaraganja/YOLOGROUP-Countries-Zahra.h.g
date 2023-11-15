import React from 'react';
import { SearchBoxTypes } from '../interfaces/countryInterfaces';
import { BsSearch } from "react-icons/bs"

const SearchBox: React.FC<SearchBoxTypes> = (props) => {

  const handleInputChange = (event: any) => {
    // console.log(typeof(event.target.value))
    const alphabets = event.target.value.match(/[A-Z]/g) || [];
    // console.log(event.target.value);
    props.setsearchValueFunc(event.target.value);
    if (event.target.value === "") {
      props.getCountriesData()
    }
    switch (alphabets.length) {
      case 1:
        props.RegexSearch(event.target.value);
        break;
      case 2:
        props.FilterByCode(event.target.value);
        break;
      default:
        props.getCountriesData()
    }

  };

  return (
    <section className={props.isMobile ? `flex flex-row  w-[94%] mb-4 mt-3 ` : `flex flex-row  w-[40%] mb-4 mt-3 `} >
      <input data-testid="searchbox-input" type='text' id='search' name='countrycode-search' placeholder='Enter Countriy Code' value={props.searchValue} onChange={handleInputChange}
        className=' w-[100%] rounded-md py-1 pl-3 ' />
      <div data-testid="start searching" className=' -ml-8 mt-1'>
        <BsSearch color={"gray"} size={20} />
      </div>
    </section>

  )
}

export default SearchBox