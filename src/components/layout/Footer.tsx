import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-[#002A3A] text-white py-10">
            <div className="">
                <div className='container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-gray-700 py-8
                
                
                '>
                    {/* Quick Links Section */}
                    <div className="quick-links border-r border-gray-700">
                        <h3 className="text-lg font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="/" className="flex items-center hover:text-gray-400">
                                    <span className="mr-2">🔗</span> Lorem ipsum dolor sit amet
                                </a>
                            </li>
                            <li>
                                <a href="/" className="flex items-center hover:text-gray-400">
                                    <span className="mr-2">🔗</span> Lorem ipsum dolor sit amet
                                </a>
                            </li>
                            <li>
                                <a href="/" className="flex items-center hover:text-gray-400">
                                    <span className="mr-2">🔗</span> Lorem ipsum dolor sit amet
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Middle Links Section */}
                    <div className="middle-links border-r border-gray-700">
                        <ul className="space-y-2">
                            <li>
                                <a href="/" className="hover:text-gray-400">Lorem</a>
                            </li>
                            <li>
                                <a href="/" className="hover:text-gray-400">Ipsum</a>
                            </li>
                            <li>
                                <a href="/" className="hover:text-gray-400">Consectetur</a>
                            </li>
                            <li>
                                <a href="/" className="hover:text-gray-400">Effictur</a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Us Section */}
                    <div className="contact-us">
                        <h3 className="text-lg font-bold mb-4">Contact Us</h3>
                        <p className="mb-4">
                            Lorem ipsum, iso lorem, <br />
                            iso Lorem Ipsum
                        </p>
                        <p className="mb-4">
                            +91 00000 00000 <br />
                            info@demo.com
                        </p>
                        <div className="flex space-x-4">
                            <a href="/" className="hover:text-gray-400">
                                <FaFacebookF />
                            </a>
                            <a href="/" className="hover:text-gray-400">
                                <FaTwitter />
                            </a>
                            <a href="/" className="hover:text-gray-400">
                                <FaLinkedinIn />
                            </a>
                            <a href="/" className="hover:text-gray-400">
                                <FaYoutube />
                            </a>
                            <a href="/" className="hover:text-gray-400">
                                <FaInstagram />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Bottom Section */}
            <div className="text-center  md:text-start  text-sm border-t border-gray-700 mt-8 pt-4 md:pl-8">
                <p>©2024 Demo. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
