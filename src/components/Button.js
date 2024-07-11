import React from 'react'

const Button = (props) => {
  const {btnname}=props;
  return (
    <button className='bg-indigo-600 text-white font-[Poppins] py-2 px-6 rounded md:ml-8 hover:bg-indigo-400 duration-500'>{btnname}</button>
  )
}

export default Button