import React from 'react'
import HomeContact from './HomeContact'


const Gallery = () => {
  return (
    <>
      
      <div className='text-3xl text-vpcolor font-semibold  mt-20 px-10 md:px-14 py-10'>Gallery </div>
      <div className='md:flex px-10'>
        <div className='flex-1'>
          <img src='/asserts/one1.webp' alt='one' className='flex-1 w-auto pb-10 md:px-5' />
          <img src='/asserts/two2.webp' alt='two' className='flex-1 w-auto pb-10 md:px-5' />
          <img src='/asserts/three3.webp' alt='three' className='flex-1 w-auto pb-10 md:px-5' />
        </div>

        <div className='flex-1'>
          <img src='/asserts/four.webp' alt='four' className='flex-1 w-auto pb-10 md:px-5' />
          <img src='/asserts/five.webp' alt='five' className='flex-1 w-auto pb-10 md:px-5' />
          <img src='/asserts/six.webp' alt='six' className='flex-1 w-auto pb-10 md:px-5' />
        </div>

        <div className='flex-1'>
          <img src='/asserts/ten.webp' alt='seven' className='flex-1 w-auto pb-10 md:px-5' />
          <img src='/asserts/eleven.webp' alt='eight' className='flex-1 w-auto pb-10 md:px-5' />
          <img src='/asserts/nine.webp' alt='nine' className='flex-1 w-auto pb-10 md:px-5' />
        </div>
      </div>
      <HomeContact/>
    </>
  )
}

export default Gallery


// .background {
//   background-image: url('../images/bg.jpg'); /* Adjust the path if necessary */
//   background-size: cover;
//   background-position: center;
//   height: 300px;
//   width: 100%;
// }