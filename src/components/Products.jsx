import React from 'react'
import mobilelogin from '../assets/mobilelogin.png';
import teslalogo from '../assets/teslalogo.png';
import companylogo0 from '../assets/companylogo/clogo0.png';
import companylogo1 from '../assets/companylogo/clogo1.png';
import companylogo2 from '../assets/companylogo/clogo2.png';
import companylogo3 from '../assets/companylogo/clogo3.png';
import companylogo4 from '../assets/companylogo/clogo4.png';
import companylogo5 from '../assets/companylogo/clogo5.png';
import companylogo6 from '../assets/companylogo/clogo6.png';

const Products = () => {
  return (
    <div>
      <div className='items-center px-4 mx-auto my-8 lg:px-14 max-w-screen-2xl'>
        <div className='flex flex-col items-center justify-between gap-12 mx-auto md:w-11/12 md:flex-row'>
          <div>
            <img src={mobilelogin} alt="" />
          </div>
          <div className='mx-auto md:w-3/5'>
            <h2 className='mb-4 text-4xl font-semibold text-neutralDGray md:w-4/5'>How to design your site footer like we did</h2>
            <p className='mb-8 text-sm text-neutralGray md:w-3/4'>Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.</p>
            <button className='btn-primary'>Learn More</button>
          </div>
        </div>
      </div>

      {/* company stats */}
      <div className='px-4 py-16 mx-auto bg-neutralSilver lg:px-14 max-w-screen-2xl'>
        <div className='flex flex-col items-center justify-between gap-8 mx-auto md:w-11/12 md:flex-row'>
          <div className='md:w-1/3'>
            <img src={teslalogo} alt="" />
          </div>


          {/* stats */}
          <div className='mx-auto md:w-2/3'>
          <div>
            <p className='mb-8 text-sm leading-7 md:w-4/5 text-neutralGray'>Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p>
            <h5 className='mb-2 text-xl font-semibold text-brandPrimary'>Tim Smith</h5>
            <p className='text-base text-neutralGray'>British Dragon Boat Racing Association</p>
            <div>
              <div className='flex flex-wrap items-center gap-8 mt-8'>
                <img src={companylogo0} alt="" className='cursor-pointer'/>
                <img src={companylogo1} alt="" className='cursor-pointer'/>
                <img src={companylogo2} alt="" className='cursor-pointer'/>
                <img src={companylogo3} alt="" className='cursor-pointer'/>
                <img src={companylogo4} alt="" className='cursor-pointer'/>
                <img src={companylogo5} alt="" className='cursor-pointer'/>
                <img src={companylogo6} alt="" className='cursor-pointer'/>
                <div>
                  <a href="/" className='font-bold text-brandPrimary hover:text-neutral-700'>Meet all customers →</a>
                </div>
              </div>
            </div>
          </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products