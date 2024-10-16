import Image from 'next/image';
import BANNER from '../../public/images/BANNER.png';

const Banner = () => {
    return (
        <section className="relative h-[100vh] flex items-center justify-center">
            <Image
                src={BANNER}
                alt="Banner Image"
                layout="fill"
                objectFit="cover"
                quality={100}
                priority={true}
                className="absolute inset-0 -z-10"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#002B3A00] to-[hsla(0,0%,12%,1)] opacity-40"></div>

            {/* Content section */}
            <div className="relative z-10 text-center md:text-left px-4 sm:px-6 md:px-8 lg:px-10 flex flex-col items-center md:items-start justify-center md:absolute md:bottom-1/4 md:left-0 w-full">
                {/* Title */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                    Lorem ipsum dolor sit amet
                </h1>

                {/* Description */}
                <p className="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl text-white text-justify w-[90%] sm:w-[80%] md:w-[75%] lg:w-[70%]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis velit nulla. In hac habitasse platea dictumst. Fusce non venenatis velit. Proin luctus malesuada mauris vitae mattis. Pellentesque iaculis elit lorem, et varius ipsum dictum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis velit nulla. In hac habitasse platea dictumst.
                </p>
            </div>
        </section>
    );
};

export default Banner;
