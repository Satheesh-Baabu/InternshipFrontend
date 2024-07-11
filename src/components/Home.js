import React from 'react'
import Carousel from './Carousel'
import HomeInfrastructure from './HomeInfrastructure'
import HomeContact from './HomeContact'
import AboutHome from './AboutHome'
import HomeServices from './HomeServices'


function Home() {
  const slides=[
    "/asserts/Fact7.jpg",
    "/asserts/Fact12.jpg",
    // "/asserts/Fact4.jpeg",
    "/asserts/Fact5.jpeg"
    // "/asserts/Fact6.jpeg",
    
  ]
  return (
    <div className=''>
    <div className='mt-20 relative'>
      <div className='w-3xl '>
        <Carousel autoSlide={true} autoSlideInterval={3000}>
          {slides.map((s,index)=>(<img key={index} src={s} alt='Slides' className='w-full'/>))}
        </Carousel>
      </div>
      <div className='absolute inset-0 flex items-center justify-center flex-col'>
        <h1 className='text-2xl md:text-5xl text-vpcolor font-bold animate-bounce h-6 text-glow tracking-wider'>V PRINT TECH</h1>
        <p className='text-md md:text-2xl text-white p-2 md:p-9 font-semibold antialiased italic tracking-wider'>Creative Prints</p>
      </div>
      
    </div>
    <AboutHome />
      <HomeServices/>
      <HomeInfrastructure/>
      <HomeContact/>
    </div>
  )
}

export default Home