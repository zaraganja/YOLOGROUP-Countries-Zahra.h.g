import React from 'react'
import { tableTypes } from '../interfaces/countryInterfaces'

const CountriesTable : React.FC<tableTypes> = (props) => {
  return (
    <table className={`table-fixed ${props.isMobile? `w-[94%]` : `w-[40%] `}  bg-[rgba(255,255,255,0.5)] rounded-md mb-3 `}>
    <thead>
      <tr>
        <th >{props.column1} </th>
        <th>{props.column2} </th>
      </tr>
    </thead>
    <tbody >
      {props.Countries?.map((item, index) => {
        return (
          <tr key={index} >
            <td className=' pl-7 border-r border-b flex border-gray-800 py-2'><p className=' mr-3'>{item.emoji}</p>{item.name} </td>
            <td className=' pl-9 border-b border-gray-800 py-2' >{item.code} </td>
          </tr>

        )
      })}

    </tbody>
  </table> 
  )
}

export default CountriesTable