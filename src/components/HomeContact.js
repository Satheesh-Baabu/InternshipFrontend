import React from 'react'
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Link } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { FaInfoCircle } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { IoMdImages } from "react-icons/io";

function HomeContact() {
  let Links = [
    { icon: <FaHome />, name: "Home", linkname: "/" },
    { icon: <FaInfoCircle />, name: "About", linkname: "/about" },
    { icon: <MdOutlineMiscellaneousServices />, name: "Services", linkname: "/services" },
    { icon: <IoMdImages />, name: "Gallery", linkname: "/gallery" },
    { icon: <FaBuilding />, name: "Infrastructure", linkname: "/infrastructure" },
    { icon: <IoMdContact />, name: "Contact", linkname: "/contact" }
  ];
  function moveToTop() {
    window.scrollTo(0, 0);
    return null
  }
  return (
    <>
    <div className='xl:flex items-center gap-x-12 p-10'>
      <div className='basis-1/4 '>
        <div>
          <h1 className='text-3xl text-vpcolor pb-5 font-semibold'>Contact Us</h1>
        </div>
        <div className='flex flex-row items-center'>
          <FaLocationDot className='mt-1 h-8 text-vpcolor' /><p className='pl-3'>2/2152/2A1, Viswanatham Road, Sivakasi, Tamil Nadu 626 123.</p>
        </div>
        <div className='flex flex-row items-center'>
          <MdEmail className='mt-1 h-8 text-vpcolor' />
          <p className='pl-3'>vprinttech@hotmail.com</p>
        </div>
        <div className='flex flex-row '>
          <FaPhone className='mt-1 h-8 text-vpcolor' />
          <div>
            <p className='pl-3'>+91 8778937152</p>
            <p className='pl-3'>+91 9566786738</p>
          </div>
        </div>
      </div>
      <div className='basis-1/4'>
        <div>
          <h1 className='text-3xl text-vpcolor py-5 font-semibold'>Quick Links</h1>
        </div>
        <ul>
          {
            Links.map((link) => (
              <li key={link.name} className='text-xl my-3'>
                <Link to={link.linkname} className='text-gray-800 hover:text-vpcolor duration-500 flex' onClick={moveToTop}><h1 className='mt-1 pr-2'>{link.icon}</h1>{link.name}</Link>
              </li>
            ))
          }
        </ul>
      </div>
      <div className='basis-1/4 w-full flex-1'>
        <div>
          <h1 className='text-3xl text-vpcolor py-5 font-semibold'>Location</h1>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3935.789764589824!2d77.79795087478597!3d9.439827490638834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b06cf75dd321771%3A0x4a2159712a450587!2sV%20PRINT%20TECH!5e0!3m2!1sen!2sin!4v1717589751302!5m2!1sen!2sin"
          width="100%" height="200" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className='py-3' title='map'></iframe>
      </div>
    </div>
    <div className='text-center bg-hovervp text-white'>
      &copy;  Copyright 2024 <Link to='/' onClick={moveToTop} className='text-vpcolor'>SS Developers.</Link> All rights reserved.
    </div>
    </>
  )
}

export default HomeContact