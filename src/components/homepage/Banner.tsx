import Image from 'next/image';
import BANNER from '../../../public/images/HERO.png';

const Hero = () => {
    return (
        <section className="relative h-[60vh] md:h-[100vh]  overflow-hidden flex items-center justify-center">
            <Image
                src={BANNER}
                alt="Hero Image"
                layout="fill"
                objectFit="cover"
                quality={100}
                priority={true}
                className="absolute inset-0 -z-10"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#002B3A00] to-[hsla(0,0%,12%,1)] opacity-40"></div>

            {/* Content section */}
            <div className="absolute inset-0 flex flex-col justify-end items-start p-6 md:p-10 lg:p-20">
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

export default Hero;
