import React from 'react'
import blogcard1 from '/src/assets/blogcard1.png';
import blogcard2 from '/src/assets/blogcard2.png';
import blogcard3 from '/src/assets/blogcard3.png';
const Blog = () => {
    const blogs = [
        {
            id: 1,
            title: "Creating Streamlined Safeguarding Processes with OneRen",
            Image: blogcard1
        },
        {
            id: 2,
            title: "What are your safeguarding responsibilities and how can you manage them?",
            Image: blogcard2
        },
        {
            id: 3,
            title: "Revamping the Membership Model with Triathlon Australia",
            Image: blogcard3
        }
    ];
    return (
        <div className='px-4 mx-auto my-12 max-w-screen-2xl lg:px-14' id='testimonial'>
            <div className='mx-auto text-center md:w-1/2'>
                <h1 className='mb-2 text-4xl font-semibold text-neutralDGray'>Caring is the new marketing</h1>
                <p className='mx-auto mb-8 text-sm text-neutralGray md:w-3/4'>The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.​</p>
            </div>
            <div className='grid items-center justify-between grid-cols-1 gap-8 lg:grid-cols-3 sm:grid-cols-2'>
                {
                    blogs.map((blog) => <div key={blog.id} className='relative mx-auto mb-12 cursor-pointer'>
                        <img src={blog.Image} alt="" className='transition-all duration-300 hover:scale-95' />
                        <div className='absolute left-0 right-0 px-4 py-6 mx-auto text-center bg-white rounded-md shadow-md -bottom-14 md:w-3/4'>
                            <h3 className='mb-3 font-semibold text-neutralGray'>{blog.title}</h3>
                            <div>
                                <a href="/" className='font-bold text-brandPrimary hover:text-neutral-700'>Read more →</a>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    )
}

export default Blog