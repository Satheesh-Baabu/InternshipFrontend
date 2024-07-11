import React from 'react'
import HomeContact from './HomeContact'

const Services = () => {
  return (
    <>
    <div className='mt-20 p-10'>
        <h1 className='text-3xl text-vpcolor pb-5 font-semibold'>What We Can Do</h1>
    </div>
    <div className='lg:flex max-w-9xl mx-auto gap-8 text-center group px-10'>
        <div className='bg-bgvp duration-500   hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 cursor-pointer p-8 rounded-xl mix-blend-luminosity my-9 flex-1'>
            <img src="/asserts/abouticoni1.jpg" alt="Design" className='h-20 mx-auto rounded-full mb-3'/>
            <h4 className='uppercase text-xl font-bold text-vpcolor'>Creative Design</h4>
            <p className='text-sm leading-7 my-3 opacity-50'>
            Our expertise in creative design is your trusted resource to bring your vision to life, market your brand, and convey your message with impact.
            </p>
        </div>
        <div className='bg-bgvp duration-500  hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 cursor-pointer p-8 rounded-xl mix-blend-luminosity my-9 flex-1'>
            <img src="/asserts/abouticonii3.jpg" alt="Lamination" className='h-20 mx-auto rounded-full mb-3'/>
            <h4 className='uppercase text-xl font-bold text-vpcolor'>Lamination</h4>
            <p className='text-sm leading-7 my-3  opacity-50'>
            We offer a variety of finishes, including silver and holographic, to add durability and a polished look to your procucts.
            </p>
        </div>
        <div className='bg-bgvp duration-500   hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 cursor-pointer p-8 rounded-xl mix-blend-luminosity my-9 flex-1'>
            <img src="/asserts/abouticon2.jpg" alt="Printing" className='h-20 mx-auto rounded-full mb-3'/>
            <h4 className='uppercase text-xl font-bold text-vpcolor'>Printing</h4>
            <p className='text-sm leading-7 my-3 opacity-50'>
            The printed page is a trusted way to communicate. Quality Printing is your trusted resource to help print that piece, market and communicate your message.
            </p>
        </div> 
    </div>
    <HomeContact/>
    </>
  )
}

export default Services