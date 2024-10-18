import Image from 'next/image';
import IMG from "@/../../public/images/image 273.png";
import IMG2 from "@/../../public/images/image 276.png";
import PlayButton from '../ui/PlayButton';

const SectionWithImageCard = () => {
    return (
        <div className="mt-8">
            <div className="relative w-full h-[100vh] md:h-[500px] lg:h-[600px]">
                {/* Background Image */}
                <Image
                    src={IMG}
                    alt="Graduation Banner"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                    priority
                    className="absolute inset-0"
                />

                {/* Content Section */}
                <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-center md:justify-between px-4  md:px-6 lg:px-12 xl:px-22 2xl:px-44">
                    {/* Text Section */}
                    <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
                        <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                            Lorem Ipsum <br /> dolor sit consectetur
                        </h2>
                        <p className="text-base md:text-lg text-black leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis velit nulla. In hac
                            habitasse platea dictumst. Fusce non venenatis velit. Proin luctus malesuada mauris vitae
                            mattis. Pellentesque iaculis elit lorem, et varius ipsum dictum. Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit.
                        </p>
                    </div>

                    <div className="min-w-80 mt-8 md:mt-0 md:ml-8 relative bg-white rounded-md shadow-lg overflow-hidden">
                        <h1 className="text-black text-lg text-start mt-4 px-4 py-2">Lorem Ipsum?</h1>

                        <div className="relative w-full h-64 md:h-80">
                            <Image
                                src={IMG2}
                                alt="Top Image"
                                layout="fill"
                                objectFit="cover"
                                className="absolute rounded-md  shadow-lg p-2"
                            />
                        </div>

                        <div className="absolute bottom-4 left-0 right-0 p-2 ">
                            <p className="text-sm md:text-base text-black text-justify">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis velit nulla. In hac
                                habitasse platea dictumst.
                            </p>
                        </div>

                        {/* Play Button */}
                        <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
                        <PlayButton/>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SectionWithImageCard;
