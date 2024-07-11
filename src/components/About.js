import React from 'react'
import { Link } from 'react-router-dom'
import Technology from './Technology'
import HomeContact from './HomeContact'



function About() {
    return (
        <div>
            <div className='mt-20 p-10'>
                <div className='pb-10'>
                    <h1 className='text-3xl text-vpcolor font-semibold'>About us</h1>
                </div>
                <div className='lg:flex'>
                    <div className='lg:flex-1 lg:h-9/12 border-2 border-solid border-white-500 shadow-md  text-black  p-2 mb-10 flex place-content-center rounded-3xl md:h-42'>
                        <img src="/asserts/LOGO.svg" alt="noimage" className='' />
                    </div>
                    <div className='md:flex-1 md:pl-10 '>
                        <p className='text-justify tracking-wide font-semibold leading-9 indent-12'>
                            V PRINT TECH (VPT), is a printing offset in SIVAKASI. This company was started in 2019 March. In March 2019, the company bought a four-colour printing machine to start their production department. They only provide coolie jobs for customers. As the production increased so, they decided to buy another four-colour printing machine on October 2019 to manage their production works easily and time saving.

                            This company's license has approved by the Government. The safety check of the company is approved by the FIRE SERVICE department of SIVAKASI. The Goods and Service Tax (GST) registration for this company is registered in November 2018. To increase the production of the company, they decided to start a lamination and cutting in their own industry. With the help of these machines, they provide each and every work perfectly to their customers. After four years of successful production and good quality, they decided to bought a six-colour machine to increase their production. The six-colour machine was exported from USA to INDIA and arrived to the company on November 2023. Both normal and UV Printing format are provided. UV printing marks a significant milestone in our commitment to providing the highest quality printing solutions to our clients. Our primary focus is on providing top-notch quality to our clients.
                        </p>
                        {/* <p className='text-justify tracking-wide font-semibold leading-9 indent-12'>
                        Welcome to V PRINT TECH, your premier destination for comprehensive printing solutions in Sivakasi. As a leading printing company, we specialize in delivering top-notch designing, lamination, and printing services to meet all your personal and business needs. At V PRINT TECH, our mission is to combine innovation, quality, and exceptional customer service to bring your creative visions to life.
                    </p> */}
                        <div className='m-3'>
                            <div className="flex text-center">
                                <div className="grow p-3">
                                    <h2 className='md:text-2xl mb-4 text-xl'>5Yrs</h2>
                                    <h5 className='md:text-xl text-lg font-semibold uppercase'>since 2019</h5>
                                </div>
                                <div className="grow p-3">
                                    <h2 className='md:text-2xl mb-4 text-xl'>500+</h2>
                                    <h5 className='md:text-xl text-lg font-semibold uppercase'>Clients</h5>
                                </div>
                            </div>
                        </div>
                        <button className='bg-vpcolor text-white font-[Poppins] py-2 px-6 rounded  hover:bg-hovervp duration-500'><Link to="/contact">Contact</Link></button>
                    </div>
                </div>
            </div>
            <Technology />
            <HomeContact />
        </div>
    )
}

export default About