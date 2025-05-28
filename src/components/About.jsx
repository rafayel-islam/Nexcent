import React from 'react'
import aboutImg from '../assets/about1.png';
import memberimg from '../assets/stats/member.png';
import eventsimg from '../assets/stats/events.png';
import clubimg from '../assets/stats/club.png';
import paymentsimg from '../assets/stats/payments.png';
const About = () => {
    return (
        <div className='items-center'>
            {/* about text */}
            <div className='items-center px-4 mx-auto my-8 lg:px-14 max-w-screen-2xl'>
                <div className='flex flex-col items-center justify-between gap-12 mx-auto md:w-11/12 md:flex-row'>
                    <div>
                        <img src={aboutImg} alt="" />
                    </div>
                    <div className='mx-auto md:w-3/5'>
                        <h2 className='mb-4 text-4xl font-semibold text-neutralDGray md:w-4/5'>The unseen of spending three years at Pixelgrade</h2>
                        <p className='mb-8 text-sm text-neutralGray md:w-3/4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
                        <button className='btn-primary'>Learn More</button>
                    </div>
                </div>
            </div>
            {/* company stats */}
            <div className='px-4 py-16 mx-auto bg-neutralSilver lg:px-14 max-w-screen-2xl'>
                <div className='flex flex-col items-center justify-between gap-8 mx-auto md:w-11/12 md:flex-row'>
                    <div className='md:w-1/2'>
                        <h2 className='mb-4 text-4xl font-semibold text-neutralDGray md:w-2/3'>Helping a local <br /><span className='text-brandPrimary'>business reinvent itself</span></h2>
                        <p className='mb-8 text-sm text-neutralGray md:w-3/4'>We reached here with our hard work and dedication</p>
                    </div>
                    {/* stats */}
                    <div className='flex flex-col justify-around gap-12 mx-auto md:w-1/2 sm:flex-row sm:items-center'>
                        <div className='space-y-8'>
                            <div className='flex items-center gap-4'>
                                <img src={memberimg} alt="" />
                                <div>
                                    <h4 className='text-2xl font-semibold text-neutralDGray'>2,245,341</h4>
                                    <p>Members</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-4'>
                                <img src={eventsimg} alt="" />
                                <div>
                                    <h4 className='text-2xl font-semibold text-neutralDGray'>828,867</h4>
                                    <p>Event Bookings</p>
                                </div>
                            </div>
                        </div>
                        <div className='space-y-8'>
                            <div className='flex items-center gap-4'>
                                <img src={clubimg} alt="" />
                                <div>
                                    <h4 className='text-2xl font-semibold text-neutralDGray'>46,328</h4>
                                    <p>Clubs</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-4'>
                                <img src={paymentsimg} alt="" />
                                <div>
                                    <h4 className='text-2xl font-semibold text-neutralDGray'>1,926,436</h4>
                                    <p>Payments</p>
                                </div>
                            </div>
                        </div>
                        
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About