import Image from "next/image";
import React from "react";
import HERO2 from '../../../public/images/HERO2.png';
import PlayButton from "../ui/PlayButton";

const Feature = () => {
    return (
        <div className="px-4 mt-8 md:px-6 lg:px-12 xl:px-22 2xl:px-44">
            {/* Hero Section */}
            <section className="relative w-full h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden rounded-lg">
                <Image
                    src={HERO2}
                    alt="Graduation Banner"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                    priority
                    className="absolute inset-0"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                <div className="absolute inset-0 flex flex-col justify-end items-start p-6 md:p-7 lg:p-10">
                    <div className="relative z-10 flex items-start space-x-4">

                        {/* Hero Text */}
                        <div className="flex flex-col gap-2">
                            <PlayButton />

                            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
                                Lorem ipsum dolor sit amet.
                            </h1>
                            <p className="mt-2 text-lg text-white">Sanchez Alexis</p>
                            <p className="mt-2 text-lg text-white">CEO & Founder of Demo</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Feature;
