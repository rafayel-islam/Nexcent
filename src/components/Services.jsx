import React from 'react'
import companylogo from '../assets/companylogo/clogo.png';
import companylogo1 from '../assets/companylogo/clogo1.png';
import companylogo2 from '../assets/companylogo/clogo2.png';
import companylogo3 from '../assets/companylogo/clogo3.png';
import companylogo4 from '../assets/companylogo/clogo4.png';
import companylogo5 from '../assets/companylogo/clogo5.png';
import companylogo6 from '../assets/companylogo/clogo6.png';
import icon1 from '../assets/icon1.png';
import icon2 from '../assets/icon2.png';
import icon3 from '../assets/icon3.png';

const Services = () => {
    const services = [
        {
            id: 1,
            title: 'Membership Organisations',
            description: 'Our membership management software provides full automation of membership renewals and payments',
            icon: icon1
        },
        {
            id: 2,
            title: 'National Associations',
            description: 'Our membership management software provides full automation of membership renewals and payments',
            icon: icon2
        },
        {
            id: 3,
            title: 'Clubs And Groups',
            description: 'Our membership management software provides full automation of membership renewals and payments',
            icon: icon3
        },
    ]

    return (
        <div className='px-4 py-16 mx-auto max-w-screen-2xl md:px-14'>
            <div className='my-8 text-center'>
                <h1 className='mb-2 text-4xl font-semibold text-neutralDGray'>Our Clients</h1>
                <p className='text-neutralGray'>We have been working with some Fortune 500+ clients</p>

                {/* company logo hare */}
                <div className='flex flex-wrap items-center justify-between gap-8 my-12'>
                    <img src={companylogo} alt="companylogo" />
                    <img src={companylogo1} alt="companylogo" />
                    <img src={companylogo2} alt="companylogo" />
                    <img src={companylogo3} alt="companylogo" />
                    <img src={companylogo4} alt="companylogo" />
                    <img src={companylogo5} alt="companylogo" />
                    <img src={companylogo6} alt="companylogo" />
                    
                </div>
            </div>
            <div className='mx-auto mt-20 text-center md:w-1/2' id='service'>
                <h1 className='mb-3 text-4xl font-semibold text-neutralDGray'>Manage your entire community in a single system</h1>
                <p className='text-neutralGray'>Who is Nextcent suitable for?
                </p>
            </div>

            {/* services card */}
            <div className='grid grid-cols-1 gap-12 mx-auto mt-14 md:grid-cols-2 lg:grid-cols-3 md:w-11/12'>
                {
                    services.map(service => <div key={service.id} className='px-4 py-8 text-center md:h-80 mx-auto rounded-md shadow cursor-pointer md:w-[300px] hover:translate-y-3 hover:border-b-4 hover:border-brandPrimary transition-all duration-300 flex items-center justify-center h-full' >
                        <div>
                            <div className='h-14 mb-8 w-14 mx-auto rounded-br-3xl rounded-tl-3xl bg-[#E8F5E9]'><img src={service.icon} alt="" className='-ml-5' /></div>
                            <h4 className='px-2 mb-2 text-2xl font-bold text-neutralDGray'>{service.title}</h4>
                            <p className='text-sm text-neutralGray'>{service.description}</p>
                        </div>
                    </div>
                        
                    )
                }
            </div>
        </div>
    )
}

export default Services