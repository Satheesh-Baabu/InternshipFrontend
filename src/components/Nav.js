import React, { useState } from 'react'
import { FaBars } from "react-icons/fa6";
import { IoMdContact,IoMdImages } from "react-icons/io";
import { FaInfoCircle,FaBuilding,FaWindowClose,FaHome} from "react-icons/fa";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { Link } from 'react-router-dom';

const Nav = () => {
    let Links = [
        { icon: <FaHome />, name: "Home", linkname: "/" },
        { icon: <FaInfoCircle />, name: "About", linkname: "/about" },
        { icon: <MdOutlineMiscellaneousServices />, name: "Services", linkname: "/services" },
        { icon: <IoMdImages />, name: "Gallery", linkname: "/gallery" },
        { icon: <FaBuilding />, name: "Infrastructure", linkname: "/infrastructure" },
        { icon: <IoMdContact />, name: "Contact", linkname: "/contact" }
    ];
    let [open, setopen] = useState(false)

    function moveToTop () {
        window.scrollTo(0, 0);
        return null
    }
    return (
        <div className="shadow-md w-full fixed top-0 left-0 z-50">
            <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
                <Link to="/" className="font-bold text-2xl cursor-pointer flex items-center font-[Sans-serif] text-gray-800">
                    {/* icons */}
                    <span className='text-xl font-bold text-vpcolor mr-1 pt-2 flex items-center'><img src="/asserts/LOGO1.png" alt="Logo" width="40" /><h1 className='ml-2'>V</h1><span className='text-xl font-bold text-gray-800 ml-1 tracking-wider'>PRINT TECH</span> </span>
                </Link>
                <div onClick={() => setopen(!open)} className=' text-3xl absolute right-8 top-7 cursor-pointer lg:hidden'>
                    {open ? <FaWindowClose /> : <FaBars />}
                </div>
                <ul className={`lg:flex md:items-center lg:pb-0  pb-12 absolute lg:static bg-white lg:z-auto z-[-1] left-0 w-full lg:w-auto lg:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 opacity-100' : 'top-[-490px] lg:opacity-100'} [&>*:first-child]:ml-0`}>
                    {
                        Links.map((link) => (
                            <li key={link.name} className='lg:ml-8 text-xl lg:my-0 my-7' onClick={() => setopen(!open)}>

                                <Link to={link.linkname} className='text-gray-800 hover:text-vpcolor duration-500 flex' onClick={()=>moveToTop()}><h1 className='mt-1 pr-1'>{link.icon}</h1>{link.name}</Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Nav