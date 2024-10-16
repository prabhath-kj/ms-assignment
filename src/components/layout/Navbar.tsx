"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Button from "../ui/Button";
import { links } from "@/static";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);
    
    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navbarClasses = scrollPosition > 50 
        ? "bg-gray-900  transition-colors duration-300" 
        : "bg-transparent ";

    return (
        <nav className={`fixed w-full z-50 top-0 text-white shadow-sm ${navbarClasses}`}>
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
                    className="md:hidden flex items-center focus:outline-none"
                >
                    {isOpen ? (
                        <FiX className="w-6 h-6" />
                    ) : (
                        <FiMenu className="w-6 h-6" />
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden flex flex-col space-y-4 p-4 bg-gray-600 h-screen">
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
