import React from 'react';
import logo from '../assets/footericon.png';
import { FaInstagram, FaFacebook, FaTwitter, FaYoutube, FaPaperPlane } from 'react-icons/fa';

const Myfooter = () => {
    const year = new Date().getFullYear();
    return (
        <footer className="bg-[#292929] text-gray-300 px-6 py-12">
            <div className="grid grid-cols-1 gap-10 mx-auto max-w-7xl md:grid-cols-4">

                {/* Logo + Copyright */}
                <div>
                    <a href="#" className="flex items-center mb-4 space-x-3">
                        <img src={logo} alt="Nexcent Logo" className="w-10" />
                        <span className="text-2xl font-semibold text-white">NEXCENT</span>
                    </a>
                    <p className="text-sm">
                        Copyright © {year} Nexcent Ltd.
                        <br />
                        All rights reserved
                    </p>
                    <div className="flex mt-4 space-x-4 text-xl">
                        <a href="https://www.instagram.com/rafayel.islam/" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className="cursor-pointer hover:text-white" />
                        </a>
                        <a href="https://www.facebook.com/Eex.Raf" target="_blank" rel="noopener noreferrer">
                            <FaFacebook className="cursor-pointer hover:text-white" />
                        </a>
                        <a href="https://x.com/Rafayelislam" target="_blank" rel="noopener noreferrer">
                            <FaTwitter className="cursor-pointer hover:text-white" />
                        </a>
                        <a href="https://www.youtube.com/@RAFAYEL7Zero" target="_blank" rel="noopener noreferrer">
                            <FaYoutube className="cursor-pointer hover:text-white" />
                        </a>
                    </div>

                </div>

                {/* Company */}
                <div>
                    <h6 className="mb-3 font-bold text-white">Company</h6>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:underline">About us</a></li>
                        <li><a href="#" className="hover:underline">Blog</a></li>
                        <li><a href="#" className="hover:underline">Contact us</a></li>
                        <li><a href="#" className="hover:underline">Pricing</a></li>
                        <li><a href="#" className="hover:underline">Testimonials</a></li>
                    </ul>
                </div>

                {/* Support */}
                <div>
                    <h6 className="mb-3 font-bold text-white">Support</h6>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:underline">Help center</a></li>
                        <li><a href="#" className="hover:underline">Terms of service</a></li>
                        <li><a href="#" className="hover:underline">Legal</a></li>
                        <li><a href="#" className="hover:underline">Privacy policy</a></li>
                        <li><a href="#" className="hover:underline">Status</a></li>
                    </ul>
                </div>

                {/* Subscribe */}
                <div>
                    <h6 className="mb-3 font-bold text-white">Stay up to date</h6>
                    <div className="relative">
                        <input
                            type="email"
                            placeholder="Your email address"
                            className="w-full pr-10 text-sm bg-gray-700 border-gray-600 input input-bordered"
                        />
                        <button className="absolute text-white transform -translate-y-1/2 right-2 top-1/2">
                            <FaPaperPlane />
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Myfooter;
