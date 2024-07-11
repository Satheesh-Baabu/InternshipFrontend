import React, { useState } from 'react'
import axios from 'axios';
import HomeContact from './HomeContact';

function Contact() {
  

    
  
  const [name,setName]=useState();
  const [email,setEmail]=useState();
  const [mobileno,setMobileno]=useState();
  const [message,setMessage]=useState();
  const submittesFunc = (e) =>
  {
    e.preventDefault();
    axios.post('https://intershipbackend-tupo.onrender.com/contact',{name,email,mobileno,message})
    .then(result => {console.log(result)
      if(result.statusText==="OK")
      {
        alert('Submitted Successfully')
      }
    })
    .catch(err => console.log(err))
  }


  return (
    <div>
    <div className='mt-20 p-10'>
      <form className='flex flex-col items-center' onSubmit={submittesFunc}>
      
        <div className='flex flex-col w-10/12 xl:w-6/12'>
        <div><h1 className='text-3xl text-vpcolor pb-5 font-semibold'> <u>Feedback</u> :</h1></div>
          <label htmlFor="name" className='mx-1 mt-1 text-neutral-800 '>Name :</label>
          <input type="text" required id="name" className=' bg-white  border border-vpcolor hover:border-hovervp rounded-xl p-1 m-1 text-neutral-800' onChange={(e) => setName(e.target.value)} />
        </div>
        <div className='flex flex-col w-10/12 xl:w-6/12'>
          <label htmlFor="email" className='mx-1 mt-1 text-neutral-800 '>Email :</label>
          <input type="email" id="email" required className=' bg-white  border border-vpcolor hover:border-hovervp rounded-xl p-1 m-1 text-neutral-800' onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div className='flex flex-col w-10/12 xl:w-6/12'>
          <label htmlFor="mobileno" className='mx-1 mt-1 text-neutral-800'>Mobile No. :</label>
          <input type="number" id="mobileno" required className=' bg-white  border border-vpcolor hover:border-hovervp rounded-xl p-1 m-1 text-neutral-800' onChange={(e) => setMobileno(e.target.value)}/>
        </div>
        <div className='flex flex-col w-10/12 xl:w-6/12'>
          <label htmlFor="message" className='mx-1 mt-1 text-neutral-800'>Message :</label>
          <textarea name="" id="message" cols="30" rows="5" className=' bg-white  border border-vpcolor hover:border-hovervp rounded-xl p-1 m-1 text-neutral-800' onChange={(e) => setMessage(e.target.value)}></textarea><br />
        </div>
          <button className='bg-vpcolor text-white font-[Poppins] py-2 px-6 rounded w-10/12 xl:w-6/12 hover:bg-white hover:text-vpcolor hover:border-2 hover:border-vpcolor duration-500' >Submit</button>
      </form>

      <br /><br />  
      </div>
      <HomeContact />
    </div>
  )
}

export default Contact