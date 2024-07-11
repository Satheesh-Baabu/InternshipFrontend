import React from 'react';


const Infrastructure = () => {
  return (
    <>
      <div className=' text-3xl font-semibold text-vpcolor px-10 pt-10 '>
        INFRASTRUCTURE <br /><br />
      </div>

      <div className='p-10 flex flex-col lg:flex-row-reverse gap-x-10 gap-y-10'>
        <div className='flex-1'>
          <div className=' text-3xl font-bold text-vpcolor'>
            MITSUBISHI SIX COLOR OFFSET PRINTING MACHINE <br /><br />
          </div>
          <div className=''>
            <h1 className='pb-10 text-xl'>Mitsubishi Six Color Offset Printing Machine Interdeck along with UV coater (CPC - Fully computerized control High speed Machine)</h1>
            <h4 className='text-lg text-vpcolor'>Specifications:</h4>
            <p className='py-2'>Model: Diamond 3000LX</p>
            <p className='py-2'>6 Color with Coater</p>
            <p className='py-2'>Maximum Sheet Size: 720 x 1020 mm (28" x 40")</p>
            <p className='py-2'>Minimum Sheet Size: 360 x 540 mm ( 14.5" x 22")</p>
            <p className='py-2'>Maximum Printing Speed: 16,000 sheets / hour</p>
            <h4 className='text-lg text-vpcolor'>UV Printing:</h4>
            <p className='py-2'>UV Printing is a gloosy coating applied to the printed surface of paper using UV Lamp.</p>

          </div>


        </div>
        <div className='lg:flex-1'>
          <img src='/asserts/sixcolor.webp' alt="sixcolor" className='w-full h-full' />
        </div>
      </div>


      <div className='p-10 flex flex-col lg:flex-row gap-x-10 gap-y-10'>
        <div className='flex-1'>
          <div className=' text-3xl font-bold text-vpcolor'>
            MITSUBISHI FOUR COLOR OFFSET PRINTING MACHINE <br /><br />
          </div>
          <div className=''>
            <h1 className='pb-10 text-xl'>Mitsubishi Four Color Offset Printing (CPC - Fully computerized control High speed Machine)</h1>
            <h4 className='text-lg text-vpcolor'>Specifications:</h4>
            <p className='py-2'>Model: Diamond 3000LS</p>
            <p className='py-2'>4 Color with Coater</p>
            <p className='py-2'>Maximum Sheet Size: 720 x 1020 mm (28" x 40")</p>
            <p className='py-2'>Minimum Sheet Size: 360 x 540 mm ( 14.5" x 22")</p>
            <p className='py-2'>Maximum Printing Speed: 16,000 sheets / hour</p>
            <h4 className='text-lg text-vpcolor'>UV Printing:</h4>
            <p className='py-2'>UV Printing is a gloosy coating applied to the printed surface of paper using UV Lamp.</p>
          </div>
        </div>
        <div className='lg:flex-1'>
          <img src='/asserts/fourcolor.webp' alt="fourcolor" className='w-full h-full' />
        </div>
      </div>


      <div className='p-10 flex flex-col lg:flex-row-reverse gap-x-10 gap-y-10'>
        <div className='flex-1'>
          <div className=' text-3xl font-bold text-vpcolor'>
            CUTTING MACHINE <br /><br />
          </div>
          <h4 className='text-lg text-vpcolor'>Specifications:</h4>
          <p className='py-2'>Model: ITOH Robocut</p>
          <p className='py-2'>Cutting Speed: Approx. 45 cuts per minute.</p>
          <p className='py-2'>Precision Cutting: High accuracy and repeatability in cutting operations, ensuring consistent quality.</p>
          <p className='py-2'>Automation: Programmable operations for automated cutting sequences, reducing manual intervention and increasing productivity.</p>
        </div>
        <div className='lg:flex-1'>
          <img src='/asserts/cutting.webp' alt="cutting" className='w-full h-full' />
        </div>
      </div>



      <div className='p-10 flex flex-col lg:flex-row gap-x-10 gap-y-10'>
        <div className='flex-1'>
          <div className=' text-3xl font-bold text-vpcolor'>
            LAMINATION MACHINE <br /><br />
          </div>
          <div className=''>
            <h4 className='text-lg text-vpcolor'>Specifications:</h4>

            <p className='py-2'>Maximum Sheet Size: 32"</p>
            <p className='py-2'>Maximum Speed: 1,000 sheets / hour</p>
            <h4 className='text-lg text-vpcolor py-2'>Silver Films:</h4>
            <p className='py-2'>Silver Films are MET PET-based lamination films that lend your product a silver metal-like finish. These add a touch of luxury to your product and are designed by experts to enhance durability & aesthetic appeal.In printing applications, silver films often utilize a five-color process where white is used as an additional color.</p>
            <h4 className='text-lg text-vpcolor py-2'>Holographic Films:</h4>
            <p className='py-2'>Holographic Films are made from MET PET with a brocaded foil layer giving it a unique character. This combination provides a distinctive and eye-catching 3D effect. In printing applications, holographic films often utilize a five-color process where white is used as an additional color.</p>
          </div>
        </div>
        <div className='lg:flex-1'>
          <img src='/asserts/lamination.webp' alt="lamination" className='w-full h-full' />
        </div>
      </div>
      </>
      )
}

      export default Infrastructure