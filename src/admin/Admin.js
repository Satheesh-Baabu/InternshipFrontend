import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Admin() {
    const [aname, setAName] = useState();
    const [bpass, setAPass] = useState();
    const navigate = useNavigate();
    function adminFunc(e) {
        e.preventDefault();
        axios.post('https://intershipbackend-tupo.onrender.com/admin ', { aname, bpass })
            .then(result => {
                console.log(result)
                if (result.data === "Success") {
                    navigate('feedback')
                }
            })
            .catch(err => console.log(err))
    }
    return (
        <div className=''>
            <form className='flex w-full h-screen justify-center items-center' onSubmit={adminFunc}>
                <div className='flex flex-col'>
                <div className='flex flex-col text-vpcolor text-3xl p-10'><h1>Admin Login</h1></div>

                <label htmlFor="aname">Name:</label>
                <input type="text" id='aname' required className=' bg-white  border border-vpcolor hover:border-hovervp rounded-xl p-1 m-1 text-neutral-800' onChange={(e) => setAName(e.target.value)} />
                <label htmlFor="apassword">Password:</label>
                <input type='password' id='apassword' required className=' bg-white  border border-vpcolor hover:border-hovervp rounded-xl p-1 m-1 text-neutral-800' onChange={(e) => setAPass(e.target.value)} />
                <button className='bg-vpcolor text-white font-[Poppins] py-2 px-6 rounded  hover:bg-white hover:text-vpcolor hover:border-2 hover:border-vpcolor duration-500' >Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Admin