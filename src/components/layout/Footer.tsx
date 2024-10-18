import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-[#002A3A] text-white py-10">
            <div className="">
                {/* Horizontal Menu for Quick Links */}
                <div className="flex justify-start space-x-4 md:space-x-8 px-4 mb-8 text-sm md:text-base">
                    {["Quick Links", "Home", "About Us", "Pricing", "Portfolios", "Insights"].map((item, index) => (
                        <div key={index} className="hover:text-gray-400 cursor-pointer">
                            {item}
                        </div>
                    ))}
                </div>

                {/* Main Section */}
                <div className='container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-gray-700 py-8'>

                    {/* Quick Links Section */}
                    <div className="quick-links flex flex-col items-start border-r border-gray-700">
                        <ul className="space-y-4 w-full">
                            {["Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet"].map((item, index) => (
                                <li key={index}>
                                    <a href="/" className="flex items-center justify-center py-2 px-2 rounded-md ">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Middle Links Section */}
                    <div className="middle-links flex flex-col items-start border-r border-gray-700">
                        <ul className="space-y-4 w-full">
                            {["Lorem", "Ipsum", "Consectetur", "Effictur"].map((item, index) => (
                                <li key={index}>
                                    <a href="/" className="flex items-center justify-center py-2 px-2 transition">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Us Section */}
                    <div className="contact-us flex flex-col items-start">
                        <h3 className="text-lg font-bold mb-4">Contact Us</h3>
                        <p className="mb-4">
                            Lorem ipsum, iso lorem, <br />
                            iso Lorem Ipsum
                        </p>
                        <p className="mb-4">
                            +91 00000 00000 <br />
                            info@demo.com
                        </p>
                        <div className="flex space-x-4 mt-4">
                            {/* Social Media Icons */}
                            {[FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube, FaInstagram].map((Icon, index) => (
                                <a key={index} href="/" className="bg-[#004752] hover:bg-[#005962] p-2 rounded-full transition">
                                    <Icon className="text-white" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Bottom Section */}
            <div className="text-center md:text-start text-sm border-t border-gray-700 mt-8 pt-4 md:pl-8">
                <p>©2024 Demo. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
