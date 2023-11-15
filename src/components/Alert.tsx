import React from 'react'
import { alertTypes } from '../interfaces/countryInterfaces'
import { MdClose } from "react-icons/md";

const Alert: React.FC<alertTypes> = (props) => {
  return (
    <div className={` absolute right-3 border border-red-300 w-[20%] h-[20%] bg-[rgba(255,255,255,0.7)] justify-center place-items-center rounded-md ${props.showAlert ? ` flex flex-col` : ` hidden`}`}>
      <div className=' hover:cursor-pointer absolute top-1 right-1 ' onClick={()=> props.CloseAlert()}>
        <MdClose size={25} />
      </div>

      <h2>{props.alertText} </h2>

    </div>
  )
}

export default Alert