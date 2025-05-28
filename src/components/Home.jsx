import React from 'react';
import banner1 from '../assets/banner.png';
import { Carousel } from 'antd';

const slides = [
  {
    id: 1,
    title: 'Lessons and insights',
    highlight: 'from 8 years',
    description: 'Where to grow your business as a photographer: site or social media?',
    image: banner1,
    btn: 'Register',
  },
  {
    id: 2,
    title: 'Build your presence',
    highlight: 'with confidence',
    description: 'Create a strong foundation for your brand across all platforms.',
    image: banner1,
    btn: 'Get Started',
  },
  {
    id: 3,
    title: 'Grow beyond limits',
    highlight: 'with smart tools',
    description: 'Use modern tools to scale your photography business.',
    image: banner1,
    btn: 'Learn More',
  },
];

const Home = () => {
  return (
    <div className="bg-neutralSilver">
      <div className="px-4 mx-auto max-w-screen-2xl lg:px-14">
        <Carousel className="w-full mx-auto" autoplay>
          {slides.map((slide) => (
            <div key={slide.id}>
              <div className="grid items-center w-full gap-10 py-20 place-items-center md:grid-cols-2 md:py-28">
                <div className="text-center md:text-left">
                  <h1 className="mb-4 text-3xl font-semibold leading-snug md:text-5xl text-neutralDGray md:w-3/4">
                    {slide.title}{' '}
                    <span className="text-brandPrimary">{slide.highlight}</span>
                  </h1>
                  <p className="mb-6 text-base text-neutralGray">{slide.description}</p>
                  <button className="btn-primary">{slide.btn}</button>
                </div>
                <div>
                  <img src={slide.image} alt="Banner image" className="w-full max-w-md md:max-w-full" />
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
