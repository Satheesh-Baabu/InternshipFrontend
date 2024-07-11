import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Feedback() {
    const [employees,setCustomers]=useState([]);
    useEffect(()=>{
        axios.get('https://intershipbackend-tupo.onrender.com/feedback')
        .then(employees =>setCustomers(employees.data))
        .catch(err=>console.log(err))
    },[])
  return (
    <div className='w-full h-screen flex justify-center items-center'>
        <div>
        <table className='table-fixed border-separate border border-slate-400'>
            <thead>
                <tr>
                    <th className='border border-slate-300'>Name</th>
                    <th className='border border-slate-300'>Email</th>
                    <th className='border border-slate-300'>Mobile No.</th>
                    <th className='border border-slate-300'>Message</th>
                </tr>
            </thead>
            <tbody>
                {
                    employees.map((cus,i)=>{
                        return <tr key={i}>
                            <td className='border border-slate-300'>{cus.name}</td>
                            <td className='border border-slate-300'>{cus.email}</td>
                            <td className='border border-slate-300'>{cus.mobileno}</td>
                            <td className='border border-slate-300'>{cus.message}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
        </div>
    </div>
  )
}

export default Feedback