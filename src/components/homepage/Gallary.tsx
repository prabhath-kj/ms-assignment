import React from 'react';
import Image from 'next/image';
import { gallary } from '@/static';



const Gallary = () => {
    return (
        <div className="mt-8 px-4 py-8 md:px-6 lg:px-12 xl:px-22 2xl:px-44 bg-[#F2F2F2]">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-black">
                Lorem ipsum dolor sit amet, consectetur
            </h2>

            {/* Card Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {gallary.map((insight, index) => (
                    <div
                        key={insight.id}
                        className={`relative bg-gray-100 shadow-lg rounded-lg overflow-hidden group ${index % 2 === 0 ? 'md:row-span-2' : 'md:row-span-1'
                            }`}
                    >
                        <div
                            className={`relative w-full ${index % 2 === 0 ? 'h-80 md:h-[350px]' : 'h-80 md:h-[250px]'
                                }`}
                        >
                            <Image
                                src={insight.imgSrc}
                                alt={insight.title}
                                layout="fill"
                                objectFit="cover"
                                className="rounded-lg"
                            />
                        </div>
                        <div className="absolute inset-0 bg-black bg-opacity-40 p-6 flex flex-col justify-end transition duration-300 group-hover:bg-opacity-70">
                            <h3 className="text-lg md:text-xl font-semibold text-white">
                                {insight.title}
                            </h3>
                            <p className="text-sm text-gray-300 mt-2">
                                {insight.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallary;
