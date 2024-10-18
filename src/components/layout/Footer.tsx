import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-[#002A3A] text-white py-10">
            <div className="px-4">
                {/* Horizontal Menu for Quick Links */}
                <div className="flex flex-wrap justify-start space-x-4 md:space-x-8 mb-8 text-sm md:text-base">
                    {["Quick Links", "Home", "About Us", "Pricing", "Portfolios", "Insights"].map((item, index) => (
                        <div key={index} className="hover:text-gray-400 cursor-pointer">
                            {item}
                        </div>
                    ))}
                </div>

                {/* Border */}
                <div className="border-t border-gray-700" />

                {/* Main Section */}
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 py-8">

                    {/* Quick Links Section */}
                    <div className="quick-links flex flex-col items-start md:border-r border-gray-700 pr-0 md:pr-8">
                        <ul className="space-y-4 w-full">
                            {["Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet"].map((item, index) => (
                                <li key={index}>
                                    <a href="/" className="flex items-center justify-center md:justify-start py-2 px-2 transition">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Middle Links Section */}
                    <div className="middle-links flex flex-col items-start md:border-r border-gray-700 pr-0 md:pr-8">
                        <ul className="space-y-4 w-full">
                            {["Lorem", "Ipsum", "Consectetur", "Effictur"].map((item, index) => (
                                <li key={index}>
                                    <a href="/" className="flex items-center justify-center md:justify-start py-2 px-2 transition">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Us Section */}
                    <div className="contact-us flex flex-col items-center md:items-start">
                        <h3 className="text-lg font-bold mb-4">Contact Us</h3>
                        <p className="mb-4 text-center md:text-left">
                            Lorem ipsum, iso lorem, <br />
                            iso Lorem Ipsum
                        </p>
                        <p className="mb-4 text-center md:text-left">
                            +91 00000 00000 <br />
                            info@demo.com
                        </p>
                        <div className="flex justify-center md:justify-start space-x-4 mt-4">
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
            <div className="text-center md:text-start text-sm border-t border-gray-700 mt-8 p-4 ">
                <p>©2024 Demo. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
