"use client"
import { useState } from "react";
import Link from "next/link";
import Button from "./Button";
import { links } from "@/static";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-transparent  shadow-sm fixed w-full z-10 top-0">
            <div className="container mx-auto flex justify-between items-center p-4">
                <div className="text-xl font-bold">DEMO</div>
                <div className="hidden md:flex space-x-6">
                    {links.map((link) => (
                        <Link key={link.href} href={link.href} className="hover:text-blue-500">
                            {link.label}
                        </Link>
                    ))}
                </div>
                <Button text="Contact Us" className="hidden md:flex" />

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden flex items-center text-gray-700 focus:outline-none"
                >
                    <svg
                        className="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                        />
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden flex flex-col space-y-4 p-4 bg-gray-600 h-full">
                    {links.map((link) => (
                        <Link key={link.href} href={link.href} className="hover:text-blue-500">
                            {link.label}
                        </Link>
                    ))}
                    <Button text="Contact Us" />

                </div>
            )}
        </nav>
    );
};

export default Navbar;
