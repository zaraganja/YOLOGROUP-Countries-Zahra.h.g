import React from 'react';
import { SearchBoxTypes } from '../interfaces/countryInterfaces';
import { BsSearch } from "react-icons/bs"

const SearchBox: React.FC<SearchBoxTypes> = (props) => {
  return (
    <section className={props.isMobile? `flex flex-row  w-[94%] mb-4 mt-3 `:`flex flex-row  w-[40%] mb-4 mt-3 `} >
      <input type='text' id='search' name='countrycode-search' placeholder='Enter Countriy Code' value={props.searchValue} onChange={props.handleInputChange}
        className=' w-[100%] rounded-md py-1 pl-3 ' />
        <div className=' -ml-8 mt-1'>
        <BsSearch color={"gray"} size={20}  />
        </div>
    </section>

  )
}

export default SearchBox