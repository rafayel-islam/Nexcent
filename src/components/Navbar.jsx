import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import logo from '../assets/logo.png';

// icons
import { FaXmark, FaBars } from 'react-icons/fa6';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    // set toggle menu open and close
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsSticky(true);
            }
            else {
                setIsSticky(false);
            }

        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    // Nav items array
    const navItems = [
        { link: 'Home', path: 'home' },
        { link: 'Service', path: 'service' },
        { link: 'Feature', path: 'feature' },
        { link: 'Product', path: 'product' },
        { link: 'Testimonial', path: 'testimonial' },
        { link: 'FAQ', path: 'faq' },
    ];



    return (
        <header className='fixed top-0 left-0 right-0 w-full bg-white md:bg-transparent'>
            <nav className={`px-4 py-4 lg:px14 ${isSticky ? "sticky top-0 left-0 border-b bg-white right-0 duration-300" : ""}`}>
                <div className='flex items-center justify-between gap-8 text-base'>
                    <a href="" className='flex items-center space-x-3 text-2xl font-semibold'><img src={logo} alt="" className='items-center inline-block w-10' /><span className='text-[#263238]'>NEXCENT</span></a>
                    {/* nav items for large devices */}
                    <ul className='hidden space-x-12 md:flex'>
                        {
                            navItems.map(({ link, path }) => <Link key={path} to={path} smooth={true} duration={500} spy={true} offset={-70} className='block text-base text-gray900 hover:to-brandPrimary first:font-medium' >{link}</Link>)
                        }
                    </ul>

                    {/* btn for large devices */}
                        <div className='items-center hidden space-x-12 lg:flex'>
                            <a href="/" className='items-center hidden lg:flex text-brandPrimary hover:text-gray900'>Login</a>
                            <button className='px-4 py-2 text-white transition-all duration-300 rounded bg-brandPrimary hover:bg-neutralDGray '>Sign up</button>
                        </div>

                    {/* menu for small devices */}
                        <div className='md:hidden'>
                            <button onClick={toggleMenu} className='text-neutralDGray focus:outline-none focus:text-gray-500'>
                                {
                                    isMenuOpen ? (<FaXmark className='w-6 h-6'/>) : (<FaBars className='w-6 h-6' />)
                                }
                            </button>
                        </div>
                </div>
                {/* mobile menu */}
                <div className={`absolute top-16 left-0 w-full bg-brandPrimary md:hidden ${isMenuOpen ? 'block' : 'hidden'} transition-all duration-300`}>
                    <ul className='flex flex-col items-center justify-center py-4 space-y-4'>
                        {
                            navItems.map(({ link, path }) => (
                                <li key={path}>
                                    <Link to={path} smooth={true} duration={500} spy={true} offset={-70} className='block text-base text-white hover:to-brandPrimary first:font-medium' onClick={() => setIsMenuOpen(false)}>{link}</Link>
                                </li>
                            ))
                        }
                    </ul>
                    </div>
            </nav>
        </header>
    )
}

export default Navbar